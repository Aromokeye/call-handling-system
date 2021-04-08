# call-handling-system
A customer call log system for managing complaints from clients

## Issues

1. ~~CORS policy challenge~~
    We resolved this but used Node.js server to get initial data.
2. Fetching `/Call/${id}` and `/Application/${id}` endpoints could not give data but successful status.
    This amounted to fetching the entire customers data and then filtering through them for an individual customer.

## TODOs

1. Modal popups for displaying errors or promise status
2. Make it responsive for tablets and smaller mobiles
3. Testing: Intended to be done with Jest and Enzyme.
