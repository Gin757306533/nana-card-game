import React from "react";
import { Box, VStack, HStack, Button, Center, Text } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import PlayerInfo from "@/components/PlayerInfo";
import HandArea from "@/components/HandArea";
import CollectionArea from "@/components/CollectionArea";
import { ActionPrefix, Player } from "@/types";

const PlayerArea = ({
  sx,
  isMe = false,
  player,
  act,
}: {
  sx?: SystemStyleObject;
  isMe?: boolean;
  player: Player | undefined;
  act: (action: ActionPrefix, data?: any) => void;
}) => {
  if (!player) {
    return (
      <Center
        sx={{
          // width: "576px",
          width: "100%",
          height: "256px",
          backgroundColor: "gray.700",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        <Text color="white" fontSize="xl">
          等待加入
        </Text>
      </Center>
    );
  }

  return (
    <VStack
      sx={{
        // width: "576px",
        width: "100%",
        height: "256px",
        backgroundColor: "gray.700",
        padding: "8px",
        borderRadius: "8px",
        ...sx,
      }}
    >
      <Center
        sx={{
          width: "-webkit-fill-available",
          height: "78px",
          paddingX: "12px",
        }}
      >
        <PlayerInfo seatNumber={player.seat} player={player}></PlayerInfo>
        <CollectionArea cards={player.collection} />
      </Center>

      {player.hand && player.hand.length > 0 && (
        <HStack w="-webkit-fill-available">
          <Button
            colorScheme="gray"
            size="sm"
            sx={{ textWrap: "wrap", width: "32px", height: "90px" }}
            onClick={() =>
              act("action:reveal-player-card", {
                targetPlayerId: player?.id,
                minMax: "min",
              })
            }
          >
            选最小
          </Button>
          <HandArea
            isMe={isMe}
            cards={player.hand}
            onCardClick={() => {}}
          ></HandArea>
          <Button
            colorScheme="gray"
            size="sm"
            sx={{ textWrap: "wrap", width: "32px", height: "90px" }}
            onClick={() =>
              act("action:reveal-player-card", {
                targetPlayerId: player?.id,
                minMax: "max",
              })
            }
          >
            选最大
          </Button>
        </HStack>
      )}
    </VStack>
  );
};

export default PlayerArea;
