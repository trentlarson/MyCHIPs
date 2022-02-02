//Copyright MyCHIPs.org; See license in root of this package
// -----------------------------------------------------------------------------
//Run all tests in order
const Child = require('child_process')
const { Database, DBAdmin } = require('../settings')

require('./objectset.js')
require('./peernoise.js')

require('./peercomm.js')	//Deprecated

require('./impexp.js')		//Will add users needed for peer test
require('./testusers.js')	//Must run before sch-tally or tally
require('./sch-tally.js')
require('./tally.js')

//require('./peer.js')		//Old, needs rework

//require('./sch-multi.js')	//Will empty users table
require('./sch-crypto.js')

after('Delete test database', function(done) {
  Child.exec(`dropdb -U ${DBAdmin} ${Database}`, done)
})
