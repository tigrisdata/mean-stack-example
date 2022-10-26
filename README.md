# MEAN Stack Sample Application

This is a fork of [mongodb-developer/mean-stack-example](https://github.com/mongodb-developer/mean-stack-example).

This is a simple CRUD application originally built using the MEAN (MongoDB, 
Express, Angular, Node.js) stack. 

**We have replaced MongoDB with Tigris.** Why? _A modern *EAN stack requires 
a serverless backend, and MongoDB Atlas isn't one. On the other hand, Tigris 
is a modern, open source, real-time backend built to be serverless from the 
ground up._

![Demonstration of the web application](demo.gif)

## How to run it

1. Sign up for Tigris Cloud [here](https://www.tigrisdata.com/beta#signup-form).
2. Generate application credentials, which will be used by the app to 
   connect and authenticate with Tigris Cloud. Check out this
   [video](https://youtu.be/Ls50EOrU3AQ). 
3. Set your application credentials as parameters in `server/.env`. Make 
   sure the following environment variables are set: `TIGRIS_URI`, 
   `TIGRIS_CLIENT_ID`, `TIGRIS_CLIENT_SECRET`.
4. Start the server and client applications:
    ```
    npm start
    ```

When both applications are built and running, open your browser on http://localhost:4200/.

## Contributors ✨

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
        <a href="https://github.com/AbiramiSukumaran">
            <img src="https://avatars.githubusercontent.com/u/13735898?v=4" width="100px;" alt=""/><br />
            <sub><b>Abirami Sukumaran</b></sub>
        </a><br />
    </td>
    <td align="center">
        <a href="https://twitter.com/StanimiraVlaeva">
            <img src="https://avatars.githubusercontent.com/u/7893485?v=4" width="100px;" alt=""/><br />
            <sub><b>Stanimira Vlaeva</b></sub>
        </a><br />
    </td>
    <td align="center">
        <a href="https://twitter.com/ovaistariq">
            <img src="https://avatars.githubusercontent.com/u/1632658?v=4" width="100px;" alt=""/><br />
            <sub><b>Ovais Tariq</b></sub>
        </a><br />
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
