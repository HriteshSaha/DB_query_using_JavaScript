import mysql from"mysql2";

class makeCustomeQuery{
    constructor(host, user, password, dbName){
        this.connection = mysql.createConnection({
            host : host,
            user : user,
            password : password,
            database : dbName
        });
        this.connect() 
    }

    // connecting the db
    connect(){
        this.connection.connect(err => {
            if (err){
                console.error("faild to connect DB", err);
                return;
            }
            console.log("DB connected sucessfully", this.connection.threadId);
        });
    }

    // inserting the data into db
    insert(tableName, input){
        let allKeys = ""
        let allValues = ""
        Object.keys(input).forEach(key=>{
            if(allKeys === ""){
                allKeys += key
            }else{
                allKeys = allKeys + "," + key
            }
            
        })
        Object.values(input).forEach(value=>{
            if(typeof value === 'string'){
                value = `'${value}'`
            }
            if(allValues === ""){
                allValues += value
            }else{
                allValues = allValues + "," + value
            }
        })
        this.connection.query(`INSERT INTO ${tableName} (${allKeys}) VALUES (${allValues})`, (err, result)=>{
            if(err){
                console.error("Error inserting values into db", err);
                return;
            }
            console.log(result);
            
        })
    }

    // Retriving data from db
    get(tableName){
        this.connection.query(`SELECT * FROM ${tableName}`, (err, result) =>{
            if(err){
                console.error("error while getting data from the DB", err);
                return;
            }
            console.log(result);
            
        })
        this.closeConnection()
    }

    // Deleting row from a table in db
    delete(tableName, id){
        this.connection.query(`DELETE FROM ${tableName} WHERE id = ${id}`, (err, result)=> {
            if (err){
                console.error("error while deleting", err);
                return;
            }
            console.log(result);
            
        })
        this.closeConnection()
    }

    closeConnection(){
        this.connection.end(err=>{
            if (err){
                console.error("Error while closing DB connection");
                return;
            }
            console.log("DB connection closed");
        })
    }
}

const dbCall = new makeCustomeQuery("localhost", "root", "h123", "customquery")



// dbCall.insert("student", {id:2, student_name:"Student_2"})
// dbCall.insert("student", {id:3, student_name:"Student_3"})
// dbCall.insert("student", {id:4, student_name:"Student_4"})
// dbCall.insert("student", {id:5, student_name:"Student_5"})
// dbCall.insert("student", {id:6, student_name:"Student_6"})

// dbCall.delete("student", 3)

dbCall.get("student")

