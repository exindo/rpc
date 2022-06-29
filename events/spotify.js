const rpcGenerator = require("discordrpcgenerator");
module.exports = (client) => {


  let presence = rpcGenerator.createSpotifyRpc(client)

    .setDetails("NESZ TOBAT MAKSIAT") // Music Name

    .setState("By: NESZ GT") // Artist

    .setAssetsLargeImage("spotify:ab67616d0000b273675ef799a10e02136ca9b96f")// Go to Readme.md
    .setAssetsLargeText("Run On Heroku")

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
