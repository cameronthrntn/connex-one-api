<p align="center">
  <h1 align="center" style="color: #fff; font-weight: 600;">
    Connex One API
  </h1>

  <p align="center" style="font-size: 1.2rem;">
    This is Cameron Thornton's submission for the API portion of the Connex One API technical assessment, taken 03/08/2023.
  </p>

  <hr />

- ## 🎉 Installation and setup

  This dependencies for this project can be installed through yarn:

  ```bash
    yarn
  ```

  **A token will be required to make any requests. This token can be added to a .env file at the root of the project under the key of SECRET. A PORT will also need to be specified before running the development server.**

  one can then spin up the dev server (nodemon) through

  ```bash
    yarn run dev
  ```

- ## 📖 Documentation

  - ### 🚧 Structure

    This API contains 2 endpoints, as outlined in the specification.

    `/time` - Returns the current time from the epoch.

    ```
    { "epoch": number }
    ```

    `/metrics` - Returns a plaintext dump of metrics from prometheus, including both the default and garbage collection metrics.

  - ### 🧪 Testing

    This project makes use of rudimentary asynchronous testing for the available endpoints. These unit tests will ensure correct request headers and present, and that the returned values are accurate.

    To run the tests:

    ```bash
    yarn test
    ```

</p>
