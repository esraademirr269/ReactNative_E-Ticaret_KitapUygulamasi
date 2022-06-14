import SQLite from 'react-native-sqlite-storage'

export class VERITABANI {

    constructor() {
        this.sqlite = SQLite;
        this.sqlite.DEBUG(true);
        this.sqlite.enablePromise(true);
        this.sqlite.openDatabase({
            name: "KITAPTICARETI",
            location: "default"
        }).then((db) => {
            this.dbInstance = db;
        })
    }

    createTable_KULLANICI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE KULLANICI (" +
                "KULLANICI_ID INTEGER PRIMARY KEY NOT NULL ," +
                "ADI NVARCHAR(50)," +
                "SOYADI NVARCHAR(50)," +
                "TELEFONU NVARCHAR(50) ," +
                "MAIL NVARCHAR(50)," +
                "KULLANICIADI NVARCHAR(50)," +
                "KULLANICISIFRE NVARCHAR(50)," +
                "DURUM NVARCHAR(50)," +
                "CINSIYETI NVARCHAR(50));"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }
    createTable_KITAPLAR() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE KITAPLAR (" +
                "KITAP_ID INTEGER PRIMARY KEY NOT NULL ," +
                "KULLANICI_ID INTEGER  NOT NULL ," +
                "KATEGORI_ID INTEGER  NOT NULL ," +
                "KITAPADI NVARCHAR(50)," +
                "KITAPYAZARI NVARCHAR(50)," +
                "UCRET NVARCHAR(50) ," +
                "KITAPDURUM NVARCHAR(50)," +
                "KITAPBILGI NVARCHAR(50)," +
                "RESIM NVARCHAR(50));"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }
    createTable_KATEGORI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE KATEGORI (" +
                "KATEGORI_ID INTEGER PRIMARY KEY NOT NULL ," +
                "KATEGORIADI NVARCHAR(50) NOT NULL);"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }
    createTable_KARTBILGI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE KARTBILGI (" +
                "KART_ID INTEGER PRIMARY KEY NOT NULL ," +
                "KULLANICI_ID INTEGER NOT NULL ," +
                "KART_NO NVARCHAR(50)NOT NULL ," +
                "KARTSIFRE NVARCHAR(50) NOT NULL);"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }
    createTable_ISLEM() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE ISLEM (" +
                "ISLEM_ID INTEGER PRIMARY KEY NOT NULL ," +
                "ISLEMADI NVARCHAR(50) NOT NULL);"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }
    createTable_SEPET() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "CREATE TABLE SEPET (" +
                "SEPET_ID INTEGER PRIMARY KEY NOT NULL ," +
                "KULLANICI_ID INTEGER NOT NULL ," +
                "KITAP_ID INTEGER NOT NULL);"
            ).then((val) => {
                resolve(true)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        });
    }

    addTable_KULLANICI(ekle1, ekle2, ekle3, ekle4, ekle5, ekle6, ekle7, ekle8) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO KULLANICI (ADI,SOYADI,TELEFONU,MAIL,KULLANICIADI,KULLANICISIFRE,DURUM,CINSIYETI)" +
                `VALUES('${ekle1}','${ekle2}','${ekle3}','${ekle4}','${ekle5}','${ekle6}','${ekle7}','${ekle8}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }
    addTable_KITAPLAR(ekle1, ekle2, ekle3, ekle4, ekle5, ekle6, ekle7, ekle8) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO KITAPLAR (KULLANICI_ID,KATEGORI_ID,KITAPADI,KITAPYAZARI,UCRET,KITAPDURUM,KITAPBILGI,RESIM)" +
                `VALUES('${ekle1}','${ekle2}','${ekle3}','${ekle4}','${ekle5}','${ekle6}','${ekle7}','${ekle8}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }
    addTable_KATEGORI(ekle1) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO KATEGORI (KATEGORIADI)" +
                `VALUES('${ekle1}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }
    addTable_KARTBILGI(ekle1, ekle2, ekle3) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO KARTBILGI (KULLANICI_ID,KART_NO,KARTSIFRE)" +
                `VALUES('${ekle1}','${ekle2}','${ekle3}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }
    addTable_ISLEM(ekle1) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO ISLEM (ISLEMADI)" +
                `VALUES('${ekle1}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }
    addTable_SEPET(ekle1,ekle2) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "INSERT INTO SEPET (KULLANICI_ID,KITAP_ID)" +
                `VALUES('${ekle1}','${ekle2}')`

            ).then((val) => {

                resolve(true);
            }).catch((err) => {
                alert((val));
                reject(false);
            })

        });
    }

    getTable_KULLANICI(sifre,ad) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM KULLANICI WHERE   KULLANICISIFRE="`('${sifre}')`+"and KULLANICIAD="`('${ad}')`
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    getTable_KITAPLAR() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM KITAPLAR"
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }

    getTable_KATEGORI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM KATEGORI"
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    getTable_KARTBILGI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM KARTBILGI"
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    getTable_ISLEM() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM ISLEM"
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    getTable_SEPET(kullanici_id) {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "SELECT * FROM SEPET WHERE KULLANICI_ID="`('${kullanici_id}')`
                
            ).then(([values]) => {
                var array = [];
                for (let index = 0; index < values.rows.length; index++) {
                    const element = values.rows.item(index);
                    array.push(element);
                }
                resolve(array);
            }).catch((err) => {
                reject(false);
            })

        });
    }

    dropTable_KULLANICI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "DELETE FROM  KULLANICI "
            ).then((val) => {
                resolve(true);
            }).catch((err) => {
                reject(false);
            })

        });
    }

    dropTable_KITAPLAR() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "DELETE FROM  KITAPLAR "
            ).then((val) => {
                resolve(true);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    dropTable_KATEGORI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "DELETE FROM  KATEGORI "
            ).then((val) => {
                resolve(true);
            }).catch((err) => {
                reject(false);
            })

        });
    }


    dropTable_KARTBILGI() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "DELETE FROM  KARTBILGI "
            ).then((val) => {
                resolve(true);
            }).catch((err) => {
                reject(false);
            })

        });
    }
    dropTable_ISLEM() {
        return new Promise((resolve, reject) => {
            this.dbInstance.executeSql(
                "DELETE FROM  ISLEM "
            ).then((val) => {
                resolve(true);
            }).catch((err) => {
                reject(false);
            })

        });
    }

}

