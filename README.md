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
  - Edit: as I was thinking about how browser cache and CDN works and about level of personification I would like to achiveve, this actually wouldn't scale to such extent I would like it to. SSR loses on importance. So the only usecase where I would use microfrontends would be if I wanted different tech stack (but I don't need that as of today).