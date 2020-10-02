const fs = require("fs");

// export function licenseGrabber(text) {
    
// }
const license = [{
    name: "Apache 2.0 License",
    markdown: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
},
{
    name: "Boost Software License 1.0",
    markdown: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
},
{
    name: "BSD 3-Clause License",
    markdown: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
},
{
    name: "BSD 2-Clause License",
    markdown: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
},
{
    name: "CC0",
    markdown: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
},
{
    name: "Attribution 4.0 International",
    markdown: "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",
},
{
    name: "Eclipse Public License 1.0",
    markdown: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
},
{
    name: "GNU GPL v3",
    markdown: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
},
{
    name: "GNU GPL v2",
    markdown: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
},
{
    name: "GNU AGPL v3",
    markdown: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
},
{
    name: "GNU LGPL v3",
    markdown: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
},
{
    name: "GNU FDL v1.3",
    markdown: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
},
{
    name: "IBM Public License Version 1.0",
    markdown: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
},
{
    name: "ISC License (ISC)",
    markdown: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
},
{
    name: "The MIT License",
    markdown: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
},
{
    name: "Mozilla Public License 2.0",
    markdown: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
},
{
    name: "Attribution License (BY)",
    markdown: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
},
{
    name: "Open Database License (ODbL)",
    markdown: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
},
{
    name: "Public Domain Dedication and License (PDDL)",
    markdown: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
},
{
    name: "The Perl License",
    markdown: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
},
{
    name: "The Artistic License 2.0",
    markdown: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
},
{
    name: "SIL Open Font License 1.1",
    markdown: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
},
{
    name: "The Unlicense",
    markdown: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
},
{
    name: "The Do What the Fuck You Want to Public License",
    markdown: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
},
{
    name: "The zlib/libpng License",
    markdown: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
},
]

//badge code referenced from : https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#notes

license.entries


//goal for this file was to have user enter the text of the name of the license they wanted to use into the console
//then using the above array plug in the license badge to the read me
// the input was going to be trimmed and made into lower case to try to match them.
//if the user had the wrong license name it would default to MIT or would continue on without a license
