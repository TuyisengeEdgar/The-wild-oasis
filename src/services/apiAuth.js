import supabase, { supabaseUrl } from "../services/supabase";
export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function Login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return { data, error };
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error("There was an Error");

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Error happen with the signout");
}

export async function updateCurrentUser({ avatar, password, fullName }) {
  //1) Update userName or password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  //2) upload the avatar image
  const fileName = `Avatar-${data.user.id}-${Math.random()}`;
  const { error: errorStorage } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (errorStorage) throw new Error(errorStorage.message);
  // 3) update the avatar for the active user
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updateUser;
}
