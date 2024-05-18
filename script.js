const userInput = document.querySelector("input");
const container = document.querySelector(".container");

async function getUser(name) {
  try {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    return response;
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
let myname = "loyeh";
// getUser(myname);
userInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    // console.log(e.key);
    const userName = userInput.value;
    const userInfo = getUser(userName);
    const userRepos = getrepos(userName);
    console.log(userInfo, userRepos);
    if (userInfo.data) {
      container.innerHTML = ` <div
      class="image"
      style="background-image: url('${userInfo.data.avatar_url}')"
    ></div>
    <div class="user">
      <h3>${userInfo.data.name}</h3>
      <div>
        ${userInfo.data.bio}
      </div>
      <div class="info">
        <div>${userInfo.data.followers} Followers</div>
        <div>${userInfo.data.following} Following</div>
        <div>${userInfo.data.public_repos} Repos</div>
      </div>
      <div class="repos">
        <div>${userRepos.data[0].name}</div>
        <div>${userRepos.data[1].name}</div>
        <div>${userRepos.data[2].name}</div>
        <div>${userRepos.data[3].name}</div>
        <div>${userRepos.data[4].name}</div>
        <div>${userRepos.data[5].name}</div>
      </div>
    </div>`;
    } else {
      container.innerHTML = `<h3>There is no User by This Name</h3>`;
    }
  }
});
