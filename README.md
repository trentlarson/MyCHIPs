# MyCHIPs
MyCHIPs is an open-source network for implementing a new kind of digital money based on private credit.

This is *not* a Bitcoin/blockchain derivative, but rather it seeks to address
several serious problems inherent with those technologies, most notably: infinite scalability.

Briefly, if block-chain based coins can be thought of as a crypto-stock
or crypto-equity, MyCHIPs can be characterized as a crypto-bond.
Either one _can_ be used as money, or a medium of exchange.
However, a system based on private credit will be much more resilient to such forces as speculation,
volatility, inflation, and deflation.
So it will be much better solution when considering these three primary purposes of money:

    - a medium of exchange,
    - a store of value, and 
    - a measure of value.

For more in-depth information, please visit [this site.](http://gotchoices.org/mychips/beginner.html)

### Project Background:
In 2017, I posted this as an empty project on [github](http://github.com/gotchoices/mychips)
hoping to attract a team of participants.  But there was not much traffic, and less interest.
Nearly everyone was chasing Blockchain money.  So I began programming the project myself.

Initially, this involved reviving some old tools I have successfully used on other projects in the past:
Specifically, [Wyseman](http://github.com/gotchoices/wyseman) and
[Wyselib](http://github.com/gotchoices/wyselib) for deployment of a backend database, and
[Wylib](http://github.com/gotchoices/wylib) for a frontend GUI.

While Wylib is not the solution for an eventual user GUI, it has been what I needed
for an administrative console during developmen.
And it can suffice for a crude user SPA until a dedicated mobile app can be built.

I have kept the source closed for some time while I tried to work out the algorithm for performing a distributed lift.
It also took me a while to come up with a licensing mechanism I would be comfortable with.
I wanted MyCHIPs to be free for everyone to use, but only if they will use it for good.

### Current Project Status:
The _holy grail_ of MyCHIPs is a network implementation of the lift protocol introduced
in [this article](http://gotchoices.org/mychips/coupon.html) and explained in some more detail 
in [this article](http://gotchoices.org/mychips/acdc.html).

As of March, 2020, the software is successfully computing and performing fully distributed lifts in a simulated network.
I consider this "preliminary proof of concept" and so am ready to release this code subject to the attched LICENSE.
It needs a lot more work to be production ready, but maybe more people will want to take a look now that there is actually something to see.

Here is a rough outline of what has been done so far:

- Backend PostgreSQL database
  - Database authoring/modification tool
  - Data dictionary, including multi-language support
  - Basic schema to support many users per instance
  - User/group/permission structures
  - Future capability for full ERP integration
- Multi-function Javascript server
  - Peer-to-peer process
  - Administrator server
  - User server (skeleton)
- Frontend GUI framework
  - Vue-based Single Page Applications for administration
  - Vue-based Single Page Applications for user access (skeleton)
  - Network visualization tool
  - Table previewer
  - Record editor
  - Parametric search tool
  - Support for reports, actions, other control-layer functions
  - Support for editing/viewing tally contracts
- Simulations
  - Agent-based modeling simulation process (very basic)
  - Local simulation engine (single host)
  - Network based simulation engine (multiple sites)
  - Docker based simulation engine (N sites)
  - Command line UI to create/analyze simulated data sets
- Model algorithm
  - Users can negotiate tallies with each other
  - Users can exchange chits with each other
  - Sites can discover possible lift pathways through the network
  - Can (manually) initiate circular lifts through the network
  - Chit transactions stored in hash-chain list
  - Consensus algorithm between stock and foil

If you are interested in participating, clone this repo and follow the instructions
in the [Developer Instructions](doc/Development).  You should be able to get a
simple demo network running and visualize it in the administrator console.

### Project Roadmap:
- Background: http://gotchoices.org/mychips/beginner.html **(Done)**
- Functional description: http://gotchoices.org/mychips/replace.html **(Done)**
- Basic architecture: http://gotchoices.org/mychips/software.html **(Done)**
- Reference server implementation **(In progress)**
  - Database schema management tool **(Done)**
  - Database GUI access tool **(Done)**
  - Tally/Chit exchange protocol **(Done)**
  - Basic user/peer/tally schema **(Done)**
  - Implement test network across multiple databases **(Done)**
  - Harden Wylib/Wyseman (user validation) **(Done)**
  - Develop agent-based modeling tool **(Working, needs work)**
  - Develop lift algorithm **(Working, needs testing)**
  - Develop contract editing, publishing, rendering, validation **(Working, needs testing)**
  - Develop simple Wylib-based user SPA **(Testing version only, needs work)**
  - Harden Database (implement users, groups, permissions, logins) **(Basic, needs testing)**
  - Harden network communication (tickets, key exchange, noise-protocol)
  - Implement actual key signing/validation to tallies, chits, lifts
  - Finish schema version control/update mechanism
  - Develop more unit tests
- Early adopter testing (sandbox trading network)
- Rollout!
- Develop dedicated mobile user app

### Talent needs:
- Background: SSL/TLS, private/public key encryption
- Background: General Internet security
- Understand: Internet protocols
- Background: peer-to-peer networking
- Background: C++, server coding
- Background: Mobile app development
- Understand: accounting
- Understand: economics
- Understand: contract law
