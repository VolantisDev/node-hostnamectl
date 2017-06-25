var exec = require("child_process").exec
var os = require("os")

module.exports = {
    get_hostname: _get_hostname,
    set_hostname: _set_hostname
}

function _get_hostname(callback) {
    callback(os.hostname())
}

function _set_hostname(hostname, callback) {
    exec("sudo hostnamectl set-hostname " + hostname, callback)
}
