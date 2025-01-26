function f1(){
    let numbers = [99,100,101];
let [,a, ...w] = numbers;
console.log(a);

}
function f2(){
    let user = {
        name: "Vadim",
        age: 19,
    };
    
    let admin = {
        ...user,
        admin: true,
    };
    for (let [key, value] of Object.entries(admin)) {
        console.log(`${key}:${value}`); 
    }
}

function f3(){
    let store = {
        state: { // 1 уровень
            profilePage: { // 2 уровень
                posts: [ // 3 уровень
                    {id: 1, message: 'Hi', likesCount: 12},
                    {id: 2, message: 'By', likesCount: 1},
                ],
                newPostText: 'About me',
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Valera'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sasha'},
                    {id: 4, name: 'Viktor'},
                ],
                messages: [
                    {id: 1, message: 'hi'},
                    {id: 2, message: 'hi hi'},
                    {id: 3, message: 'hi hi hi'},
                ],
            },
            sidebar: [],
        },
    };

    const {
        state: {
            profilePage: { posts },  
            dialogsPage: { dialogs, messages }  
        }
    } = store;

    for (let post of posts) {
        console.log(post.likesCount);
    }

    console.log("/////////////////////////");
    for (let value of dialogs) {
        if(value.id %2 ==0){
            console.log(value.id);
        }
    }

    console.log("/////////////////////////");
    for (let value of dialogs) {
        if(value.id %2 ==0){
            console.log(value.id);
        }
    }

    console.log("/////////////////////////");
    const updatedMessages = messages.map(message => ({ id: message.id, message: "Hello user" }));

    for (let { id, message } of updatedMessages) {
        console.log(`${id} + ${message}`);
    }
    
    
}

function f4(){
let Add ={
    id: 6, 
    title: "Add", 
    isDone: false
}
    let tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
        {...Add},
    ];
  console.log(tasks[5]);
}

function f5(){

function SumValues(x,y,z){
    return x+y+z;
}
mass = [1,2,3];
console.log(SumValues(...mass));

}