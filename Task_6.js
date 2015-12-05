function SuperAdmin() {
    //id должен быть уникальным, в БД нужно будет поставить автоинкремент
    this.id;
    //в зависимости от дополнительного функционала можно делать отдельные роли
    //для двух ролей хватит и булевой переменной
    this.isAdmin = true;
};

function User() {
    //валидацию данных будем проводить на клиенте
    //id должен быть уникальным, в БД нужно будет поставить автоинкремент
    this.id;
    this.firstName;
    this.lastName;
    this.login;
    this.password;
    this.avatar;
    this.birthDate;
    this.sex;
    this.email;
    this.location;
    //в listOfFriends можно будет хранить список ID всех друзей 
    this.listOfFriends;
    //далее, при необходимости, можно будет добавить список постов, чтобы меньше грузить БД
    this.isAdmin = false;
};

User.prototype.deleteUser = function() {
    if ( !this.isAdmin ) {
        console.log("User can be deleted just by admin");
        return;
    }
    //реализация
};
User.prototype.createPost = function(title, image, text) {
    //валидация
    var newPost = new Post(this, title, image, text);
    return newPost;
};
User.prototype.editPost = function(post, title, image, text) {
    //валидация
    post.title = title;
    post.image = image;
    post.text = text;
};
User.prototype.deletePost = function(post) {
    //реализация
};
User.prototype.getOwnPosts = function() {
    //реализация
};
User.prototype.getFriendPosts = function(friend) {
    //реализация
};
User.prototype.searchFriends = function(location) {
    //реализация
};
User.prototype.inviteFriend = function(location) {
    //реализация
};

function Post() {
    this.creatorId;
    this.title;
    this.image;
    this.text;
    this.date;
}

var admin = new SuperAdmin();
var user = new User();
var post = new Post();
console.dir(admin);
console.dir(user);
console.dir(post);
