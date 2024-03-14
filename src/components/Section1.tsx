import { Box, Button, Stack, Typography } from "@mui/material";

function Section1() {
  return (
    <>
      <Box bgcolor={"rgb(255, 250, 238)"}>
        <Stack
          direction={"row"}
          marginX={"auto"}
          width={"70%"}
          justifyContent={"space-between"}
        >
          <Stack justifyContent={"center"} alignItems={"start"} spacing={2}>
            <Typography variant="h4" fontWeight={700}>
              Skills you need today for a successful
              <br /> tomorrow
            </Typography>
            <Typography>
              With our 100% online school and unique teaching method, you'll
              have the keys to your own success.
            </Typography>
          </Stack>
          <Stack width={"40%"}>
            <img
              alt=""
              //   width="568"
              src="https://oc-assets.imgix.net/modules/sdzv4-main/latest/images/home_banner-16deed9ecd0a8ef5b79c.jpg?auto=compress,format&amp;q=80&amp;w=568"
              srcSet="https://oc-assets.imgix.net/modules/sdzv4-main/latest/images/home_banner-16deed9ecd0a8ef5b79c.jpg?auto=compress,format&amp;q=80&amp;w=568&amp;dpr=1 1x,https://oc-assets.imgix.net/modules/sdzv4-main/latest/images/home_banner-16deed9ecd0a8ef5b79c.jpg?auto=compress,format&amp;q=80&amp;w=568&amp;dpr=2 2x"
            />
          </Stack>
        </Stack>
      </Box>
      <Box height={"13rem"}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          bgcolor={"rgb(253, 251, 224)"}
          height={90}
        >
          <Stack marginX={"auto"} spacing={10} direction={"row"}>
            <Box>
              <Stack
                // marginX={"auto"}
                overflow={"hidden"}
                borderRadius={2}
                boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
              >
                <Box
                  height={8}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgb(242, 233, 63) 0%, rgb(249, 171, 45) 100%)",
                  }}
                ></Box>
                <Box bgcolor={"rgb(253, 251, 224)"} p={4}>
                  <Stack spacing={2}>
                    <Typography variant="h4" fontWeight={700}>
                      Students
                    </Typography>
                    <Typography variant="subtitle1">
                      Take a big step towards your new career by taking one of
                      our diploma training programs.
                    </Typography>
                    <Stack
                      spacing={2}
                      direction={"row"}
                      justifyContent={"start"}
                      alignItems={"center"}
                    >
                      <Button
                        sx={{ bgcolor: "rgb(116, 81, 235)" }}
                        variant="contained"
                      >
                        Enroll now
                      </Button>

                      <Button
                        sx={{ color: "rgb(116, 81, 235)" }}
                        variant="text"
                      >
                        Discover training programs
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                // marginX={"auto"}
                overflow={"hidden"}
                borderRadius={2}
                boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
              >
                <Box
                  height={8}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgb(157, 169, 243) 0%, rgb(156, 199, 242) 100%)",
                  }}
                ></Box>
                <Box bgcolor={"rgb(235, 238, 251)"} p={4}>
                  <Stack spacing={2}>
                    <Typography variant="h4" fontWeight={700}>
                      Employers
                    </Typography>
                    <Typography variant="subtitle1">
                      Recruit apprentices when you need them and train your
                      teams in practical skills
                    </Typography>
                    <Stack
                      spacing={2}
                      direction={"row"}
                      justifyContent={"start"}
                      alignItems={"center"}
                    >
                      <Button
                        sx={{ bgcolor: "rgb(116, 81, 235)" }}
                        variant="contained"
                      >
                        Explore the employer space
                      </Button>

                      <Button
                        sx={{ color: "rgb(116, 81, 235)" }}
                        variant="text"
                      >
                        Discover business offers{" "}
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack height={"100%"}></Stack>
      </Box>
    </>
  );
}

export default Section1;
