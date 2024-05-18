const userInput = document.querySelector("input");

async function getUser(name) {
  try {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getrepos(name) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${name}/repos`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

userInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    console.log(e.key);
    const userName = userInput.value;
    const userInfo = getUser(userName);
    const userRepos = getrepos(userName);
    console.log(userInfo, userRepos);
  }
});
