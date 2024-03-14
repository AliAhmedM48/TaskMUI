import { Box, Stack, Typography } from "@mui/material";

function Section2() {
  return (
    <>
      <Stack p={5}>
        <Stack alignItems={"center"} spacing={2}>
          <Typography variant="h4" fontWeight={600}>
            Learn. Apply. Job-ready.
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            With OpenClassrooms, discover a new way of learning: 20% theory, 80%
            practice.
          </Typography>
        </Stack>
        <Stack
          p={5}
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
          marginX={"auto"}
          textAlign={"center"}
        >
          <Stack spacing={3}>
            <figure>
              <img
                className="block mx-auto"
                width={300}
                src="https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg"
                alt=""
              />
            </figure>
            <Box sx={{ paddingX: 5 }}>
              <Typography variant="h4" fontWeight={600}>
                Learn wherever you are
              </Typography>
              <Typography variant="body1" fontWeight={400}>
                Access your 100% online training program at the office, at home,
                in town, in the mountains - wherever you want!
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={3}>
            <figure>
              <img
                className="block mx-auto"
                width={300}
                src="https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg"
                alt=""
              />
            </figure>
            <Box sx={{ paddingX: 5 }}>
              <Typography variant="h4" fontWeight={600}>
                A mentor to support you
              </Typography>
              <Typography variant="body1" fontWeight={400}>
                Get weekly guidance from a field expert who's there to help you
                progress throughout your training program.
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={3}>
            <figure>
              <img
                className="block mx-auto"
                width={300}
                src="https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg"
                alt=""
              />
            </figure>
            <Box sx={{ paddingX: 5 }}>
              <Typography variant="h4" fontWeight={600}>
                Work on career-focused projects{" "}
              </Typography>
              <Typography variant="body1" fontWeight={400}>
                Acquire skills you can use in the workplace thanks to projects
                based on actual business cases.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Section2;
