import { CatalogBuilder } from "@backstage/plugin-catalog-backend";
import { AzureDevOpsEntityProvider } from "@backstage/plugin-catalog-backend-module-azure";
import { Router } from "express";
import { PluginEnvironment } from "../types";

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  const provider = AzureDevOpsEntityProvider.fromConfig(env.config, {
    logger: env.logger,
    schedule: env.scheduler.createScheduledTaskRunner({
      frequency: { minutes: 1 },
      timeout: { minutes: 3 },
    }),
  });
  builder.addEntityProvider(provider);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
