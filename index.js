var exec = require("child_process").exec;

module.exports = {
    set_hostname: _set_hostname
}

function _set_hostname(hostname, callback) {
    exec("sudo hostnamectl set-hostname " + hostname, callback);
};
