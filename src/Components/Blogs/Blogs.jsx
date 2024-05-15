import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl text-center font-bold py-10"> BLOGS </h1>

      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-gray-200 p-8 rounded-xl text-black ">
          <h2 className="text-2xl font-semibold">
            Question 01 : What is an access token and refresh token? How do they
            work and where should we store them on the client side?
          </h2>
          <div className="text-xl p-5 font-medium">
            <p>
              Access tokens and refresh tokens are commonly used in
              authentication mechanisms, particularly in OAuth 2.0 and similar
              authorization frameworks.
            </p>
            <br />
            <p>
              1. **Access Token**: - An access token is a credential used to
              access protected resources on behalf of a user. - It is typically
              short-lived and grants limited access rights. - Access tokens are
              obtained by presenting valid authentication credentials to the
              authorization server, usually in exchange for a users credentials
              (like a username and password) or through other means such as
              authorization codes. - Once obtained, the access token is included
              in the request headers when accessing protected resources. -
              Access tokens are designed to expire after a certain period,
              enhancing security by limiting the exposure of credentials.
              <br />
              2. **Refresh Token**: - A refresh token is a long-lived credential
              used to obtain a new access token. - It is usually paired with an
              access token. - When the access token expires, the refresh token
              can be used to request a new access token without requiring the
              user to re-authenticate. - Refresh tokens are more secure than
              storing permanent credentials like passwords since they can be
              revoked if compromised. - Refresh tokens are typically kept
              confidential and are exchanged for a new access token when needed.
            </p>
            <br />
            <p>
              {" "}
              On the client side, it is crucial to handle access tokens and
              refresh tokens securely to prevent unauthorized access to
              resources. Here are some best practices for storing them:
              <br />
              1. **Access Token**: - Access tokens are often short-lived and are
              typically stored in memory or browser storage (e.g., session
              storage or local storage) during the users session. - Storing
              access tokens in memory is more secure than local storage due to
              the risk of XSS attacks accessing tokens stored in local storage.{" "}
              <br />
              2. **Refresh Token**: - Refresh tokens are long-lived and used to
              obtain new access tokens, so they require more secure storage. -
              Refresh tokens should not be stored in client-side storage due to
              their long-lived nature and higher sensitivity. - Instead, refresh
              tokens should be securely stored in an HTTP-only cookie or within
              a secure backend server. This prevents client-side scripts from
              accessing them directly, reducing the risk of theft through XSS
              attacks. In summary, access tokens are short-lived credentials
              used to access protected resources, typically stored in memory or
              browser storage. Refresh tokens are long-lived credentials used to
              obtain new access tokens and should be securely stored on the
              server-side or in HTTP-only cookies to prevent unauthorized
              access.
            </p>
          </div>
        </div>

        <div className="text-xl my-10 p-8 font-medium bg-gray-200 rounded-xl text-black ">
          <motion.h1
            className="text-2xl font-semibold py-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Question 02: What is express js? What is Nest JS?
          </motion.h1>
          <motion.h1
            className="text-3xl py-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Express Js
          </motion.h1>

          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for building web
              and mobile applications. It is one of the most popular Node.js
              frameworks and is known for its simplicity, minimalism, and
              performance. Express.js allows developers to build web
              applications and APIs quickly and easily by providing a range of
              built-in middleware and HTTP utility methods.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Some key features of Express.js include:
              <br />
              1. **Routing**: Express provides a simple and intuitive API for
              defining routes to handle various HTTP requests (GET, POST, PUT,
              DELETE, etc.). <br />
              2. **Middleware**: Express middleware functions can be used to
              execute code during the request-response cycle, such as logging,
              authentication, error handling, etc. <br />
              3. **Templating Engines**: Express supports various templating
              engines like EJS, Pug, Handlebars, etc., allowing developers to
              render dynamic content on the server. <br />
              4. **Static File Serving**: Express can serve static files such as
              HTML, CSS, images, etc., making it easy to build single-page
              applications or serve client-side assets. <br />
              5. **Error Handling**: Express provides mechanisms for handling
              errors gracefully, including built-in error handling middleware
              and the ability to define custom error-handling middleware.
            </motion.p>

            <div className="py-10">
              <motion.h1
                className="text-3xl py-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Nest Js
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                NestJS, on the other hand, is a progressive Node.js framework
                for building efficient, reliable, and scalable server-side
                applications. It is built with TypeScript and heavily inspired
                by Angular, making use of its concepts and architecture. NestJS
                uses Express.js under the hood but provides additional features
                and abstractions to streamline the development process and
                promote code maintainability. Key features of NestJS include:
                <p>
                  1. **Modular Architecture**: NestJS encourages the use of
                  modules to organize code into reusable and maintainable units,
                  making it easy to scale and maintain applications.
                </p>
                <p>
                  2. **Dependency Injection**: NestJS provides a powerful
                  dependency injection (DI) system that allows for the creation
                  of loosely coupled components, improving code readability and
                  testability.
                </p>
                <p>
                  3. **Middleware**: Similar to Express, NestJS supports
                  middleware for executing code during the request-response
                  cycle. However, NestJS middleware can be more organized and
                  structured due to its module-based architecture.
                </p>
                <p>
                  4. **GraphQL Support**: NestJS has built-in support for
                  GraphQL, allowing developers to easily create GraphQL APIs
                  using decorators and TypeScript classes.
                </p>
                <p>
                  5. **WebSockets**: NestJS provides WebSocket support out of
                  the box, making it easy to build real-time applications using
                  WebSockets.
                </p>
                <p>
                  6. **CLI Tool**: NestJS comes with a command-line interface
                  (CLI) tool that provides generators for quickly scaffolding
                  modules, controllers, services, etc., helping developers to
                  get started with new projects quickly.
                </p>
                <br />
                Overall, NestJS builds on top of Express.js to provide a more
                structured and opinionated framework for building Node.js
                applications, with a focus on developer productivity,
                maintainability, and scalability.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="text-xl my-10 p-8 font-medium bg-gray-200 rounded-xl text-black ">
          <motion.h1
            className="text-2xl font-semibold py-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Question 03: Short Summary Of my code...
          </motion.h1>
          <motion.h1
            className="text-3xl py-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Frontend
          </motion.h1>

          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              This code sets up routing for a React application using React
              Router. It defines different routes for various pages/components
              such as Home, Login, Register, AllJobs, AddJobs, MyJobs, Blogs,
              JobDetails, UpdateJob, and ErrorPage. PrivateRoutes are used to
              protect routes that require authentication. The
              `createBrowserRouter` function from React Router is utilized to
              create the router configuration. The `Main` component serves as
              the layout wrapper for the application, containing a Navbar,
              followed by the routed content (Outlet), and finally a Footer.
              Each route specifies its path, corresponding component, and
              optionally a loader function for data fetching.
            </motion.p>

            <div className="py-10">
              <motion.h1
                className="text-3xl py-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Backend
              </motion.h1>
              <motion.p
               className=""
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                This Node.js code sets up a server using Express framework for
                handling various HTTP requests. It connects to a MongoDB
                database to perform CRUD operations on a collection called jobs.
                Here is a summary of the functionalities:
                <div className="space-y-6">

                <p>
                  1.Middleware Setup: Middleware such as CORS, JSON parsing, and
                  cookie parsing are configured.
                </p>
                <p>
                  2. JWT Verification: Middleware function verifyJWT is defined
                  to verify JSON Web Tokens (JWT) included in request for
                  cookies. It ensures routes are accessible only to
                  authenticated users.
                </p>
                <p>
                  3.
                  
                   JWT Generation: POST endpoint /jwt generates a JWT upon
                  successful login, storing it in a cookie.
                  
                  <br />

                   Logout: GET endpoint
                  /logout clears the JWT cookie upon logout. 
                  
                  Get All Jobs: GET
                  endpoint /jobs retrieves all jobs from the database. 

                  <br />
                  
                  Get Single Job by ID: GET endpoint /job/:id retrieves a single job
                  based on its ID. 

                  <br />
                  
                  Get Jobs by User Email: GET endpoint
                  /jobs/:email retrieves jobs associated with a specific user is
                  email address.
                  <br />
                  
                   Delete Job: DELETE endpoint /jobs/:id deletes a
                  job by its ID, with authorization check based on the job is
                  owner. 
                  <br />
                  Add Job with JWT Authentication: POST endpoint /addJobs
                  adds a new job to the database with JWT authentication.
                  <br />
                   
                  Update Job: PUT endpoint /updateJob/:id updates an existing job by
                  its ID. 
                  <br />
                  
                  
                  Increment Applicants Number: POST endpoint
                  /applyJob/:id increments the number of applicants for a job by
                  its ID.
                </p>
                <p>
                  4. Database Connection: It establishes a connection to MongoDB Atlas using the MongoDB Node.js driver.
                </p>
                <p>
                  5. **WebSockets**: NestJS provides WebSocket support out of
                  the box, making it easy to build real-time applications using
                  WebSockets.
                </p>
                <p>
                  6. The server listens on a specified port, with a default fallback to port 5000.
                </p>
                </div>
                <br />
                This code provides a RESTful API for managing job listings with JWT authentication and MongoDB as the backend database.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
