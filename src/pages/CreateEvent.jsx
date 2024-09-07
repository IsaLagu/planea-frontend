import { Input } from "../components/Input";

export const CreateEvent = () => {
  return (
    <>
      <form className="max-w-lg mx-auto">
        <div class="mb-5">
          <label for="email" class="block mb-2 font-medium tracking-wide text-gray-900">
            Nombre del evento
          </label>
          <Input />
        </div>

        <div class="mb-5">
          <label className="block mb-2 font-medium tracking-wide text-gray-900" htmlFor="user_avatar">
            Upload file
          </label>
          <Input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
            A profile picture is useful to confirm your are logged into your account
          </div>
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 font-medium tracking-wide text-gray-900">
            Precio de las entradas
          </label>
          <Input />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 font-medium tracking-wide text-gray-900">
            Capacidad del evento
          </label>
          <Input />
        </div>
      </form>
    </>
  );
};
