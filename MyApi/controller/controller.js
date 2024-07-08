let users = [];
let nextId = 1;

export const createUser = (req, res) => {
  const { username, age, email, password } = req.body;
  const newUser = {
    id: nextId++,
    username,
    age,
    email,
    password,
  };
  users.push(newUser);
  res.status(200).json(newUser);
};

export const getUser = (req, res) => {
  res.json(req.user);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, age, email, password } = req.body;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = {
      ...users[index],
      username,
      age,
      email,
      password,
    };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: `User mit der ID ${id} nicht gefunden` });
  }
};

export const usersArray = users;
