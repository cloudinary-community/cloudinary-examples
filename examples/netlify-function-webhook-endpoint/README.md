# Netlify Functions as Webhook Notification Endpoints

Using Webhook Notifications, Cloudinary can hit an endpoint URL any time an event occurs. We can use Netlify Functions to process that request and trigger process, such as removing a background based on tags.

## 🧰 Using Netlify Functions as Cloudinary Webhooks

After defining the Netlify Function or API endpoint as a notification URL whether globally or as part of an action, Cloudinary will send a payload with the notification type and resource information.

```
{
  "notification_type": "upload",
  "tags": ["remove-background"],
  ...
}
```

> See the full payload on the Cloudinary Docs: <https://cloudinary.com/documentation/notifications#notification_payload>

We can analyze those details, such as verify the event is an upload and we have our background removal tag, and once verified, trigger a new action such as a new upload using [Cloudinary AI Background Removal](https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon).

### Testing the Remote Function


This repository includes two functions:
- [upload.js](functions/upload.js): a helper to trigger a new file upload
- [background-removal.js](functions/background-removal.js): notification endpoint to trigger a upload with background removal

You can run these endpoints locally to simulate actions, but the notification URL must be deployed to configure it with Cloudinary, as Cloudinary can not hit a local endpoint.

See [postman.json](postman.json) to import this request into [Postman](https://www.postman.com/).

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server using the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```
netlify dev
```

* The local server should now be available at <http://localhost:888> where you can make a POST request to this endpoint at `http://localhost:8888/.netlify/functions/upload` and `http://localhost:8888/.netlify/functions/background-removal`.

See [postman.json](postman.json) to import this request into [Postman](https://www.postman.com/).
