---
status: 'proposed'
date: '2023-12-15'
deciders:
  - Joe Keiser
  - Robert Miller
  - Alan Stigler
  - Em Jones
consulted:
  - Yuri Salambash
  - Jeff Wider
informed:
  -
---

# System Modeling and The Software Catalog

## Context and Problem Statement

How do we tear down the knowledge silos that exist in our organization? How do
we know how much our systems will be impacted by a change if we don't have a
clear picture of the shape of our systems?

## Decision Drivers

- TCO - deployment model
- TCO - language/library support(Typescript & React)
- TCO - What sort of security will this system require?
- TCO - culture shifts required for support
- TCO - infrastructure cost
- Benefits of catalog - how does knowing the shape of our system more explicitly
  help us?
- Benefits of platform - extensibility/supported integrations

## Considered Options

- [Backstage (current)](https://www.backstage.io)
- [Port](https://www.getport.io)
- [OpsLevel](https://www.opslevel.com/)

## Decision Outcome

Chosen option: "{title of option 1}", because {justification. e.g., only option,
which meets k.o. criterion decision driver | which resolves force {force} | … |
comes out best (see below)}.

### Consequences

- Good, because {positive consequence, e.g., improvement of one or more desired
  qualities, …}
- Bad, because {negative consequence, e.g., compromising one or more desired
  qualities, …}

### Confirmation

{Describe how the implementation of/compliance with the ADR is confirmed. E.g.,
by a review or an ArchUnit test. Although we classify this element as optional,
it is included in most ADRs.}

## Pros and Cons of the Options

- Good, point of extension for general ops concerns: cost management, ops
  metrics, etc.

### Backstage

{example | description | pointer to more information | …}

- Good, because significant plugin ecosystem; CI/CD observability, code quality,
  etc

- Neutral, because open source - No meaningful SLAs, but lots of community
  support
- Neutral, because cost - What's saved in licensing is likely consumed by
  maintenance resourcing
- Neutral, because documentation - the documentation is _fine_; it could be much
  better
- Neutral, because it's an additional tool requiring additional attention

- Bad, requires programming language skills not widely held at Foley
- Bad, requires deployment model not practiced at Foley

### Port

{example | description | pointer to more information | …}

- Good, because it's a managed product

- Bad, lacks some meaningful integrations

## More Information
