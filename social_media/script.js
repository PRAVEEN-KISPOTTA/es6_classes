//Do not alter the starter code.
function main(){
    //Create your class "User" here with all the properties and methods
    class User{
        #name;
        #email;
        #password;
        #posts

        constructor(name, email, password){
            this.#name = name;
            this.#email = email;
            this.#password = password;
            this.#posts = [];
        }

        get getName(){
          return this.#name;
        }

        set setName(data){
          this.#name = data;
        }

        get getEmail(){
          return this.#email;
        }

        set setEmail(data){
          this.#email = data;
        }

        get getPassword(){
          return this.#password;
        }

        set setPassword(data){
          this.#password = data;
        }

        addPost(obj){
          return this.#posts.push(obj);
        }

        deletePost(obj){
          return this.#posts.splice(obj, 1);
        }

        displayPosts(){
          return this.#posts.map(post=>{
            console.log(post)
          })
        }
    }
    
    //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned

    class Post extends User{
      #title;
      #content;
      #date;
      #likeCount;

      constructor(name, email, password, title, content, date){
        super(name, email, password);
        this.#title = title;
        this.#content = content;
        this.#date = date;
        this.#likeCount = 0;
      }

      get getTitle(){
        return this.#title;
      }

      set setTitle(data){
        this.#title = data;
      }

      get getContent(){
        return this.#content;
      }

      set setContent(data){
        this.#content = data;
      }

      get getDate(){
        return this.#date;
      }

      set setDate(data){
        this.#date = data;
      }

      addLike(){
        this.#likeCount++;
      }

      displayDetails(){
        console.log(`Owner: ${this.getName}`);
        console.log(`Title: ${this.getTitle}`);
        console.log(`Content: ${this.getContent}`);
        console.log(`Date: ${this.getDate}`);
        console.log(`Likes: ${this.#likeCount}`);
      }
    }
      const user1 = new User("John", "john@example.com", "password123");
      const post1 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
      );
      const post2 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
      );
      
      user1.addPost(post1);
      user1.addPost(post2);
      
      post1.addLike();
      post1.addLike();
      
      user1.displayPosts();
      // Output:
      // Posts by John:
      // - My first post
      // - My second post
      
      post1.displayDetails();
      // Output:
      // Owner: John
      // Title: My first post
      // Content: Loremipsum dolor sit amet
      // Date: 2021-01-01
      // Likes: 2
      return {User,Post};
    }
    main();