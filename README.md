<img src="https://github.com/Anisha7/rebox-client2/blob/master/rebox-logo_1.png?raw=true" height="200px">

# REBOX
Re.box is an api that tracks resuable and manages food containers as they traverse the hands of driver, consumers, and restaurant

# React set-up 
This is the react integration for the Rebox API. We provide you with the react component to embed in your checkout page in order to contact the backend.
<!-- (API key auth coming soon...!) -->
If you are not using react, use the backend API below. Otherwise, this package will handle it all for you.
`npm i rebox-client`
## ReboxUserForm component
```
<ReboxUserForm onChange={(value) => this.setState({ your_state_var: value })} userId={your_user_id}>
```
value will be an object that looks like:
```
{
  optIn: boolean
}
```
## sendReboxUserFormData(user : number, numItems : number, driverId : number, restaurantId: number)
This function will submit the data to our API and store it to the database.
This function should only be called if the onChange value in the above component was set to true.
It will return '200' or an error based on whether or not the request was successful.
# Non-React Setup
## [Backend Docs](https://pizza-box-api.herokuapp.com/)
