

const Blogs = () => {
  return (
    <div className="container mx-auto p-4 mt-6 mb-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2 ">What is an access token and refresh token?</h2>
        <p className="text-blue-500">An access token and refresh token are commonly used in authentication systems. An access token is a credential that is issued to a client after successful authentication. It is used to access protected resources on the server. Refresh token, on the other hand, is a long-lived token that can be used to obtain a new access token without requiring the user to re-authenticate. It helps in maintaining user sessions and provides better security.</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">How do they work and where should we store them on the client-side?</h2>
        <p className="text-blue-500">When a user logs in, the server generates an access token and refresh token and sends them back to the client. The client typically stores the access token in memory or local storage, as it needs to be sent with each request to access protected resources. The refresh token is securely stored on the client-side, usually as an HTTP-only cookie. When the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to provide their credentials again.</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">Compare SQL and NoSQL databases?</h2>
        <p className="text-blue-500">SQL (Structured Query Language) databases are relational databases that use tables with predefined schemas to store data. They are suitable for applications that require complex queries and transactions. NoSQL (Not only SQL) databases, on the other hand, are non-relational databases that offer flexible schemas and horizontal scalability. They are commonly used for handling large amounts of unstructured or semi-structured data and provide high performance for read-heavy workloads. The choice between SQL and NoSQL databases depends on the specific requirements of the application.</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">What is Express.js?</h2>
        <p className="text-blue-500">Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js allows you to handle HTTP requests and responses, define routes, and implement middleware for additional functionality. It is known for its minimalistic approach and extensive ecosystem, making it a preferred choice for building server-side applications using JavaScript or TypeScript.</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">What is Nest.js?</h2>
        <p className="text-blue-500">Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and leverages TypeScripts features to provide a strongly typed and object-oriented programming experience. Nest.js follows the modular architecture pattern and provides built-in support for dependency injection, routing, authentication, and other common tasks. It is designed to be developer-friendly and promotes best practices for creating enterprise-grade applications.</p>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">What is MongoDB aggregate and how does it work?</h2>
        <p className="text-blue-500">MongoDBs aggregate is a powerful aggregation framework that allows you to process and transform data within a collection. It provides a way to perform complex queries, data manipulations, and aggregations using a pipeline-based approach. The pipeline consists of multiple stages, such as filtering, grouping, projecting, sorting, and performing calculations. Each stage takes the input from the previous stage and passes it to the next stage, allowing you to shape and analyze your data in a flexible manner. The aggregate framework is particularly useful when you need to perform advanced data analysis or create custom reports from your MongoDB data.</p>
      </div>
    </div>
  );
};

export default Blogs;
