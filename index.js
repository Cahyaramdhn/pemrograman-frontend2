const Users = [
  { nama: 'Aufa', age: 22, major: 'informatics' },
  { nama: 'Isfa', age: 22, major: 'informatics' },
  { nama: 'Nurul', age: 2, major: 'information Systems' },
];

const all = (Users) => {
  for (Users of Users) {
    console.log(`Nama: ${Users.nama} \nAge: ${Users.age} \nMajor: ${Users.major} \n`);
  }
};

const store = (user) => {
  Users.push(user);
};

const update = (i, user) => {
  Users[i] = user;
};

const destroy = (index) => {
  Users.splice(index, 1);
};

const main = () => {
  console.log('# Get All Users \n');
  all(Users);

  console.log('# Add new Users: Sabiq \n');
  const newUser = {
    nama: 'Sabiq',
    age: 20,
    major: 'informatics',
  };
  store(newUser);
  all(Users);

  console.log('# Edit User: Isfa \n');
  const EditedUser = {
    nama: 'Isfani Giyath',
    age: 23,
    major: 'English',
  };
  update(1, EditedUser);
  all(Users);

  console.log('# Delete User: Nurul \n');
  destroy(2);
  all(Users);
};

main();
