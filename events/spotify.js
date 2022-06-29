const rpcGenerator = require("discordrpcgenerator");
module.exports = (client) => {


  let presence = rpcGenerator.createSpotifyRpc(client)

    .setDetails("YEEST") // Music Name

    .setState("TEST") // Artist

    .setAssetsLargeImage("spotify:ab67616d0000b27324edb22d068eb245a924b7f2")// Go to Readme.md
    .setAssetsLargeText("Heroku")

    .setAssetsSmallImage("spotify:")// Go to Readme.md
    .setAssetsSmallText("NESZ")


    .setStartTimestamp("" || Date.now()) // remember to use a number WITHOUT QUOTES and an Epoch value https://www.epochconverter.com

    ..setEndTimestamp(Date.now()+1672531200000)// .setEndTimestamp(Date.now()+1672531200000) to use a number WITHOUT QUOTES and an [Epoch value] (https://www.epochconverter.com)

    .setSyncId("")



  console.log(presence.toDiscord())


  client.user.setStatus("online"); //status account(online, idle and dnd.)


  client.user.setPresence(presence.toDiscord()).catch(console.error);

  console.log(("RPC enabled successfully"))
}
