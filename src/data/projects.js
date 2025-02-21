const projects = [
    {
      title: "AI-powered Disaster Management",
      headline: "A web platform that uses real time data for disaster management.",
      info: <p>A platform for detecting and predicting <b>Floods, Cyclones, and Landslides</b> using Real-time
satellite imagery and live weather data.<br/>
Interactive NGO dashboard for crisis management and resource allocation.<br/>
SMS alerts to notify users in the locality of possible natural disasters based on real-time data.<br/>
Additionally it has an AI chatbot (Gemini), Community forums, centralized Donations for seamless disaster response.</p>,
      techStack: ["Deep Learning", "Flask","React", "Mongo DB", "Node"],
      logo: "/images/geo1.png",
      links: {
      //   demo: "https://live-demo-link.com",
        github: "https://github.com/Kshitij04Poojary/54-GeoGuardian",
        // yt: "https://youtu.be/Ds-zPh3PeIU?si=sVCG8_mtRFCMB0ub"
      },
      images: [
        "/images/geo1.png",
        "/images/geo2.png",
        "/images/geo3.png",
        "/images/geo4.png",
        "/images/geo5.png",
        "/images/geo6.png",
        "/images/geo7.png",
        "/images/geo8.png",
        "/images/geo9.png",
      ],
    },
    {
        title: "Pet Adoption Platform",
        headline: "A web platform that uses ML to predict pet adoption likelihood.",
        info: <p>Developed a comprehensive platform using Flask and React to streamline the pet adoption process with machine
        learning-based adoption likelihood prediction.<br/>
        Implemented an ML model to predict adoption likelihood based on pet features.<br/>
        Built an admin panel with full CRUD functionality to manage pet and shelter listings (add, update, delete records).<br/>
        Designed an analytics dashboard with graphs and charts to generate reports on adoption trends and pet characteristics for
        administrative insights.<br/>
        Enabled community engagement through event registrations and donation functionalities.</p>,
        techStack: ["React", "Flask", "SQL Alchemy", "Machine Learning"],
        logo: "/images/pet1.jpeg",
        links: {
        //   demo: "https://live-demo-link.com",
          github: "https://github.com/kushjjain/NFC3_FUTURE_FUSIONS",
          yt: "https://youtu.be/Ds-zPh3PeIU?si=sVCG8_mtRFCMB0ub"
        },
        images: ["/images/pet1.jpeg", "/images/pet2.jpeg", "/images/pet3.jpeg",
          "/images/pet4.jpeg", "/images/pet5.jpeg", "/images/pet6.jpeg", 
          "/images/pet7.jpeg"
        ],
      },
      {
        title: "Rainfall Prediction in Australia",
        headline: "Rainfall Prediction Pipeline using Weather Data with Ensemble Models and Hyperparameter Tuning",
        info: <p>Developed a machine learning pipeline to predict rainfall probabilities using weather data, focusing on features like
location, wind speed, and temperature. 
            <br></br>
            Applied data preprocessing techniques, including handling missing values, feature scaling, and one-hot encoding of
            categorical variables.
            <br></br>
            Tuned hyperparameters to optimize model performance and built an ensemble of models (Random Forest, XGBoost,
                LightGBM) for improved predictions.
        </p>,
        techStack: ["Machine Learning", "React", "Flask", "Web Scraping"],
        logo: "/images/rain1.png",
        links: {
        //   demo: "https://live-demo-link.com",
          github: "https://github.com/jm12312/Data-Science-And-ML/blob/main/Rain_Prediction.ipynb",
        //   yt: "https://youtube.com/your-repo"
        },
        images: [
          "/images/rain1.png", 
          "/images/rain2.png",
          "/images/rain3.png",
        ]
      },
      {
        title: "Image Classification on Animal Dataset",
        headline: "CNN-Based Image Classification for 10 Animal Species with Data Augmentation and Grad-CAM Visualization",
        info: <p>Implemented a Convolutional Neural Network (CNN) for image classification on a dataset featuring 10 animals: dog, horse,
        elephant, butterfly, chicken, cat, cow, sheep, squirrel, and spider.         
            <br></br>
            Applied transformations including resizing, random cropping, normalization, random horizontal flip, random rotation, and
            random erasing during training to enhance model robustness.
            <br></br>
            Designed a CNN architecture comprising five convolutional layers with Batch Normalization, ReLU activations, and
MaxPooling, followed by a classifier with dropout for regularization.
            <br></br>
            Used Grad-CAM (Gradient-weighted Class Activation Mapping) to visualize learned features in convolutional layers.
            <br></br>
            Performed extensive experimentation, including hyperparameter tuning and cross-validation, to optimize the model.
        </p>,
        techStack: ["PyTorch", "Computer Vision"],
        logo: "/images/batch.png",
        links: {
        //   demo: "https://live-demo-link.com",
          github: "https://github.com/jm12312/Data-Science-And-ML/blob/main/Animal_Classification_using_CNN.ipynb",
        //   yt: "https://youtube.com/your-repo"
        },
        images: [
          "/images/batch.png",
          "/images/ResNet9.png", 
          "/images/scores.png", 
          "/images/conf_matrix.png", 
          "/images/grad_cam1.png", 
        ]
      },
      {
        title: "Blog App",
        headline: "A multi-user blog application built with Flask.",
        info: <p>Secure user login and registration. 
            <br></br>
            All CRUD (Create, Read, Update, Delete) functionalities for users to modify a posts.
            <br></br>
            Ability to Like a Post and follow users.
            <br></br>
            Password Recovery - Integrated email service to send password reset links.
        </p>,
        techStack: ["Flask", "SQL Alchemy", "HTML", "CSS"],
        logo: "/images/blog1.png",
        links: {
          demo: "https://joshua-blog-flask-47y8.onrender.com/",
          github: "https://github.com/jm12312/flaskBlog",
        //   yt: "https://youtube.com/your-repo"
        },
        images: [
          "/images/blog1.png", "/images/blog2.png", "/images/blog3.png",
          "/images/blog4.png", "/images/blog5.png"
        ]
      },

      {
        title: "Chess Engine",
        headline: "A Python-based chess engine with optimized algorithms.",
        info: <p>Evaluates the board on the number of pieces left and each piece has its own score matrix based on the most active squares<br></br>
        Uses alpha beta pruning to find the best moves in a position based on the score matrix.</p>,
        techStack: ["Python", "Pygame"],
        logo: "https://img.youtube.com/vi/FnNIeDtFn54/0.jpg",
        links: {
          demo: null,
          github: "https://github.com/jm12312/ChessEngine",
          yt: "https://www.youtube.com/watch?v=FnNIeDtFn54"
        },
        images: [
          "https://img.youtube.com/vi/FnNIeDtFn54/0.jpg", 
        ]
      },
      {
        title: "E Pharmacy Website",
        headline: "E-commerce Website with User Authentication, Cart Functionality, and Database Integration",
        info: <p>Created pages for product, contact, about, and services, with the ability to add items to the cart. 
            <br></br>
            Having functionality of logging in and storing user data on the database.
            <br></br>
            Displaying cart items after adding them.
        </p>,
        techStack: ["React", "Mongo DB", "Node"],
        logo: "/images/pha1.png",
        links: {
          demo: "https://epharma-d1wtf0rsc-kshitijs-projects-585e63ee.vercel.app/",
          github: "https://github.com/jm12312/MERN-Stack-Epharmacy-main",
        //   yt: "https://youtube.com/your-repo"
        },
        images: [
          "/images/pha1.png", "/images/pha2.png",
        ]
      },
      
  ];

export default projects;
  