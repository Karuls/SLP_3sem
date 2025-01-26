let user = {
    name: 'Masha',
    age: 21,
};
let user_copy = structuredClone(user);
let user_copy1 = {...user};
// 2
let numbers = [1,2,3];
let numbers_copy = structuredClone(numbers);
//3
let user1 = {
    name: 'Masha',
    age: 23,
    location:{
        city: 'Minsk',
        country: 'Belarus',
    }
};

let user1_copy = {
    ...user1,
    location:{
        ...user1.location
    }
};
//4
let user2 ={
    name: 'Masha',
    age:28,
    skills: ["HTML","CSS","JS","React"]
};

let user2_copy= {
    ...user2,
    skills: user2.skills.map(skill => skill),
}
//5
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 }
  ];

  const deepCopyArray = array.map(item => ({ ...item }));
  // 6
  let user4 = {
    name:'Masha',
    age: 19,
    studies:{
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false,
        }
    }
  };
  let user4_copy = {
    ...user4,
    studies:{
        ...user4.studies,
    exams:{
        ...user4.studies.exams,
    }
    }
  }
  //7
  let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
        faculty: 'FIT',
        group: 10,
      },
      exams: [
        { maths: true, mark: 8 },
        { programming: true, mark: 4 }
      ]
    }
  };

  let user5_copy = {
    ...user5,
    studies: {
      ...user5.studies,
      department: {
        ...user5.studies.department,
      },
      exams: user5.studies.exams.map(exam => ({ ...exam }))
    }
  };
//8
let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};

let user6Copy = {
    ...user6,
    studies: {
        ...user6.studies,
        department: {
            ...user6.studies.department
        },
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor
            }
        }))
    }
};
//9
let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
        ]
    }
};

let user7Copy = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.department
        },
        exams: user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({
                    ...article
                }))
            }
        }))
    }
};
//
let store = {
    state: {
        profilePage : {
        posts: [
            {id: 1, message : 'Hi', likesCount :12},
            {id: 2, message : 'By', likesCount :1},       
         ],
         newPostText: 'About me',
        },
        dialogsPage: {
            deialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            message: [
                {id: 1, name: 'hi'},
                {id: 2, name: 'hi hi'},
                {id: 3, name: 'hi hi hi'},
            ],
        },
        siderbar: [],
        },
}
let storeCopy = {
    ...store,
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({ ...post }))
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            message: store.state.dialogsPage.message.map(msg => ({ ...msg }))
        },
        sidebar: [...store.state.sidebar]
    }
};




  