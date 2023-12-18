# test-microfrontend-with-module-federation
Playing with microfrontend architecture. Would like to achieve SSR.

# Pros
- scaling is solved for individual components
- separation of concerns and decoupling out of the box 
- can use different tech stack to code microfrontends

# Cons
- sharing state
- sharing javascript dependencies
- more complex hosting
  - need to implement service discovery pattern

# TODO list
- try dockerizing the microfrontends and the host
- get SSR working