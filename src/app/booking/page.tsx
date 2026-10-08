import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import DateReserve from "@/components/DateReserve";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session ? await getUserProfile(session.user.token) : null;
  const createdAt = profile ? new Date(profile.data.createdAt) : null;

  return (
    <main className="w-full max-w-4xl p-5">
      {profile && (
        <div className="mb-4 text-gray-900">
          <table className="text-left">
            <tbody>
              <tr>
                <td className="pr-4 font-semibold">Name</td>
                <td>{profile.data.name}</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Email</td>
                <td>{profile.data.email}</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Tel.</td>
                <td>{profile.data.tel}</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Member Since</td>
                <td>{createdAt?.toDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>
      <Box component="form" className="flex flex-col gap-4">
        <DateReserve />
        <Button name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
