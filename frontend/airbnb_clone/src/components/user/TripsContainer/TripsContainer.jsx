import { EmptyState } from "../../shared"


export const TripsContainer = () => {
    const reservations = [];

  if (reservations.length === 0) {
    return (
        <EmptyState />
    );
  }

//   return (
//       <TripsClient
//         reservations={reservations}
//         currentUser={currentUser}
//       />
//   );
}
