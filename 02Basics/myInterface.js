var Abida = {
    dbId: 222,
    role: "admin",
    email: "h@h.com",
    gitHubToken: "github",
    userId: 2112,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
Abida.email = "hollo@h.com";
//bt if we want to change the dbid its not possible cz its just readonly
//like this Abida.dbId =777; is not possible
