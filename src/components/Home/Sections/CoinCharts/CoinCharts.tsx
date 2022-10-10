import { Box, Center, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';
import store from '../../../../store/store';
import { useAppSelector } from '../../../../store/store';
import { useEffect } from 'react';
import { getCoinInfo } from '../../../../store/coinSlices';
import { AreaChart, YAxis, ResponsiveContainer, Area, XAxis } from 'recharts';

const CoinCharts = () => {
  const { coinInfo } = useAppSelector((state) => state.coincard);
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(getCoinInfo(1));
  }, []);
  console.log(coinInfo);

  const cutArr = (arr: any) => {
    let cutedArr = arr.slice(-24);
    return cutedArr;
  };

  const getGraphData = (arr: any) => {
    console.log('graph', arr);

    return arr.map((el: any) => {
      return {
        data: el,
      };
    });
  };
  return (
    <Wrapper w="100%" h="700px" p="33px 210px"  >
      <Box>
        <Flex>
          <DescriptionText />
          <Box>
            <Image
              src="/images/cityPic.png"
              alt="cityPic"
              w="806px"
              h="665px"
            ></Image>
          </Box>
        </Flex>
        <Flex gap="110px">
          {coinInfo.map((item) => {
            return (
              <Box
                w="294px"
                h="298px"
                bg=" #1C2430"
                borderRadius="21px"
                boxShadow="0px 0px 79px 28px rgba(9, 11, 15, 0.2)"
                key={item.id}
              >
                <Flex gap="11px" h="50%" pr="16px" pl="16px">
                  <Center mt="19px" flex="1">
                    <Image src={item.image} w="60px" h="60px" />
                  </Center>
                  <Box mt="31px" flex="2">
                    <Box
                      fontFamily="roboto"
                      fontWeight="400"
                      fontSize="27.3px"
                      lineHeight="32px"
                    >
                      <Text>{item.name}</Text>
                    </Box>
                    <Flex
                      alignItems="center"
                      gap="26.4px"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text
                          display="flex"
                          alignItems="center"
                          height="auto"
                          fontFamily="roboto"
                          fontWeight="500"
                          fontSize="27.3px"
                          lineHeight="33px"
                        >
                          ${item.current_price}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontFamily="roboto"
                          fontWeight="400"
                          fontSize="15.9px"
                          lineHeight="19px"
                          color={
                            Number(
                              item.price_change_percentage_24h.toFixed(2),
                            ) >= 0
                              ? 'green'
                              : 'red'
                          }
                        >
                          {item.price_change_percentage_24h.toFixed(2)}%
                        </Text>
                      </Box>
                    </Flex>
                    <Flex alignItems="center" gap="15px">
                      <Text
                        color={
                          Number(item.price_change_24h.toFixed(2)) >= 0
                            ? 'green'
                            : 'red'
                        }
                      >
                        ${item.price_change_24h.toFixed(2)}
                      </Text>
                      <Text>Last 24 hours</Text>
                    </Flex>
                  </Box>
                </Flex>
                <Box w="100%" h="50%">
                  <ResponsiveContainer>
                    <AreaChart
                      data={getGraphData(cutArr(item.sparkline_in_7d.price))}
                    >
                      <defs>
                        <linearGradient
                          id="colorUv"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="3%"
                            stopColor={
                              Number(
                                item.price_change_percentage_24h.toFixed(2),
                              ) >= 0
                                ? 'rgba(251, 0, 226, 0.12)'
                                : 'rgba(251, 0, 0, 0.12)'
                            }
                          />
                          <stop
                            offset="97%"
                            stopColor={
                              Number(
                                item.price_change_percentage_24h.toFixed(2),
                              ) >= 0
                                ? ' rgba(26, 32, 44, 0.12)'
                                : ' rgba(26, 32, 44, 0.12)'
                            }
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        stroke={
                          Number(item.price_change_percentage_24h.toFixed(2)) >=
                          0
                            ? ' rgba(128, 90, 213, 1)'
                            : 'rgba(255, 0, 0, 1)'
                        }
                        dataKey="data"
                        dot={false}
                        fill="url(#colorUv)"
                      />
                      <YAxis hide={true} domain={['dataMin', 'dataMax']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default CoinCharts;
