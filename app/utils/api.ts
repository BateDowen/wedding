interface Guest {
  firstName: string;
  lastName: string;
  email: string;
  hotel: boolean;
  isComing: string;
  companionName: string;
  companionMenuType: string;
  menuType: string;
}

export const saveGuest = async (guest: Guest) => {
  const responce = await fetch("/api/Guests", {
    method: "POST",
    body: JSON.stringify(guest),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!responce.ok) {
    return "Could not save guest :(";
  }
  return responce.json();
};

export const allGuests = async (secret: string) => {
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/Guests?secret=${secret}`
  );
  const data = await responce.json();
  return data
};
