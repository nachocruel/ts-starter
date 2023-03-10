# TS-STARTER


# How to health check
http://localhost

## API Routes ###
# Call the health check
 http://localhost:3000

# Call currency current update
http://localhost:3000/currency/latest/:base

OBS: The base is should be always USD (free plan).

# Call the convert currency

http://localhost:300/currency/:from/convert/:to/:value

## Considerations ##
This solution implements message bus with AWS SQS. the message bus and API can be
 initialized running the docker compose.

Simple starter project for typescript

If you need to wait on other services to start you can use in the docker file:

```
CMD [ "./wait.sh" , "localhost:3000", "--", "node", "index.js" ]
```



