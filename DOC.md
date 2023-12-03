# Intro

Documentation for version: 0.1.0

# Core

Observus uses "observer pattern" at its core. If you ever coded in React, Vue or other mainstream js framework, you've alredy used it. It allows to represent the state of application as data, which is single source of truth.

There are three concepts you should learn.

## State

State is just a "reactive" variable. Its changes can be tracked, by other components of application.

```
{{ state-doc }}
```

## Signal

Signal is readonly value that is obtained from one or more states or signals.

```
{{ signal-doc }}
```

## Observer

Observer is essentialy just a callback `(v: A) => void` for signal changes.

```
type FreeFn = () => void;
export function observe<A>(s: Signal<A>, next: (v: A) => void): FreeFn
```

It returns function that will "unobserve" given signal.

# DOM building

TODO
