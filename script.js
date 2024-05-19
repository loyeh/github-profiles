// const { default: axios } = require("axios");

const userInput = document.querySelector("input");
const container = document.querySelector(".container");
let userInfo;
let userRepos;

async function getUser(name) {
  try {
    const userInfo = await axios.get(`https://api.github.com/users/${name}`);
    const userRepos = await axios.get(
      `https://api.github.com/users/${name}/repos`
    );
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

    console.log(userInfo, userRepos);
  } catch (error) {
    console.error(error);
    container.innerHTML = `<h3>There is no User by This Name</h3>`;
  }
}

let myname = "loyeh";
// getUser(myname);
userInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    // console.log(e.key);
    const userName = userInput.value;
    getUser(userName);
  }
});
