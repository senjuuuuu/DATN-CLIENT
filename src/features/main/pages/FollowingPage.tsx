import * as React from 'react';
import { Pin } from 'components/Pin';
import styled from 'styled-components';
const urls = [
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/derk48s-fcef9ed2-0a37-41fb-861b-6bca2405ce70.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGVyazQ4cy1mY2VmOWVkMi0wYTM3LTQxZmItODYxYi02YmNhMjQwNWNlNzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dBLoPInJeOFvFUTaRcvHz2g65cePDI9o9aNjKfvzVFA',
    key: '0',
  },
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dey7hyz-72f33294-c58c-4eaa-9df6-6aa2fcd0b9df.jpg/v1/fill/w_860,h_929,q_70,strp/sunshine_by_wlop_dey7hyz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4MiIsInBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGV5N2h5ei03MmYzMzI5NC1jNThjLTRlYWEtOWRmNi02YWEyZmNkMGI5ZGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9ZDSr_6EYZ2dlthEtZ5B00uP5uu6UW0bGy0FhB-WJzk',
    key: '4',
  },
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/detghvk-ab8df6b7-66d8-4d16-8904-7a2cb51676d4.jpg/v1/fill/w_1110,h_720,q_70,strp/shadow_4_by_wlop_detghvk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMxIiwicGF0aCI6IlwvZlwvNmYxMzFkMjItNzk3NC00NzkzLTlkYjMtMjE2MDM3NmI1YzcyXC9kZXRnaHZrLWFiOGRmNmI3LTY2ZDgtNGQxNi04OTA0LTdhMmNiNTE2NzZkNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wO2WMUNd2LFVy5SbuvSDbYTfm3-kel7Ru37by0TDfco',
    key: '3',
  },
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/devzalw-4eebe9b0-f9ae-4835-a145-9686fd243d2e.jpg/v1/fill/w_1240,h_644,q_70,strp/dressing_room_2_by_wlop_devzalw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY1IiwicGF0aCI6IlwvZlwvNmYxMzFkMjItNzk3NC00NzkzLTlkYjMtMjE2MDM3NmI1YzcyXC9kZXZ6YWx3LTRlZWJlOWIwLWY5YWUtNDgzNS1hMTQ1LTk2ODZmZDI0M2QyZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hdvisXaaZjqt00yj3LbdATsdplJbJlWWMyXurfBDKHc',
    key: '2',
  },
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dem2gyo-684f8d9a-5555-412b-96b6-bc979fb5b84a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGVtMmd5by02ODRmOGQ5YS01NTU1LTQxMmItOTZiNi1iYzk3OWZiNWI4NGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5Wjr4x94AYciffNwYETQMa2zedR5tQAnFYSnVOqOlgg',
    key: '1',
  },
  {
    src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/derk48s-fcef9ed2-0a37-41fb-861b-6bca2405ce70.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGVyazQ4cy1mY2VmOWVkMi0wYTM3LTQxZmItODYxYi02YmNhMjQwNWNlNzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dBLoPInJeOFvFUTaRcvHz2g65cePDI9o9aNjKfvzVFA',
    key: '0',
  },
];
export default function FollowingPage() {
  return (
    <Wrapper>
      {urls.map((url) => (
        <Pin url={url?.src} key={url.key} />
      ))}
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
  @media (min-width: 0px) and (max-width: 500px) {
    max-width: 256px;
    column-count: 1;
  }
  @media (min-width: 500px) and (max-width: 755px) {
    max-width: 504px;
    column-count: 2;
  }
  @media (min-width: 756px) and (max-width: 1007px) {
    max-width: 756px;
    column-count: 3;
  }
  @media (min-width: 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    column-count: 4;
  }
  @media (min-width: 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    column-count: 5;
  }
  @media (min-width: 1512px) and (max-width: 1763px) {
    max-width: 1512px;
    column-count: 6;
  }
  @media (min-width: 1762px) and (max-width: 2015px) {
    max-width: 1764px;
    column-count: 7;
  }
`;
