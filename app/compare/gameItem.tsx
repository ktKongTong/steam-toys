import {LibItem} from "@/hooks/data/query/useSteamPulicLib";
import React, {useMemo} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

export function GameItem({game}: { game: { game: LibItem, owners: any[] } }) {
  // ?t=${Date.now()}
  const img = useMemo(() => `https://cdn.akamai.steamstatic.com/steam/apps/${game.game.appid}/${game.game.capsule_filename}`, [game.game.appid, game.game.capsule_filename])
  return (
    <div className={' max-w-40 relative aspect-[6/9] h-auto'}>

      <img className={"absolute w-full h-full bg-blend-darken bg-black/70 rounded-lg z-0 inset-0"}
           loading={'lazy'} src={img}></img>
      <div className={' absolute top-0 left-0 p-1 flex text-white rounded-tl-md space-x-2 bg-blend-darken bg-black/[.8]'}>
        {game.game.appid}
      </div>
      <div className={' absolute bottom-0 right-0 p-1 flex text-white space-x-2'}>
        <div className={'mt-auto ml-auto flex flex-col group '}>
          {
            game.owners.map((it, index) =>
              < div key={index}>
                <Avatar
                  className={cn('h-6 w-6 border-[2px] border-zinc-700', '-mt-[10px] group-hover:mb-[10px]  transition-all ease-in-out')}>
                  <AvatarImage src={it.avatarfull} alt={`@${it.personaname}`}/>
                  <AvatarFallback>{it.personaName}</AvatarFallback>
                </Avatar>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}