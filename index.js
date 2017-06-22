var exec = require("child_process").exec;

module.exports = {
    set_hostname: set_hostname
}

set_hostname = function (hostname, callback) {
    exec("sudo hostnamectl set-hostname " + hostname, callback);
};
