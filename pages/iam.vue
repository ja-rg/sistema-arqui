<template>
    <div class="bg-gray-800 min-h-screen p-8 text-white">
        <div class="fixed top-5 right-5 z-100">
            <div class="flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-gray-700" role="alert"
                v-for="(alert, index) in alerts" :key="alert.message" :id="`toast-${index}`">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg" :class="{
                    'bg-green-800 text-green-200': alert.type === 'success',
                    'bg-red-800 text-red-200': alert.type === 'error'
                }">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        v-if="alert.type === 'success'" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" v-else
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                </div>
                <div class="ms-3 text-sm font-normal">
                    <div class="text-sm" v-html="alert.message"></div>
                </div>
                <button type="button"
                    class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700"
                    aria-label="Close" @click="alerts.splice(index, 1)">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>


        <h1 class="text-4xl font-bold mb-6">Identity and Access Management
            <button @click="refresh" class="text-gray-400 hover:text-gray-200">
                <Icon name="material-symbols:refresh-rounded" class="w-6 h-6" />
            </button>

            <!-- return button to the /monitor -->
            <button @click="$router.push('/monitor')" class="text-gray-400 hover:text-gray-200 float-right">
                <Icon name="material-symbols-light:arrows-more-down" class="w-6 h-6" />
            </button>
            <!-- Modal toggle -->
        </h1>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <button data-modal-target="add-user" data-modal-toggle="add-user"
                class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out flex items-center space-x-2 mb-4 float-right"
                @click="newUser = {
                    user_id: '',
                    username: '',
                    email: '',
                    password: '',
                    role: ''
                }">
                Añadir usuario
                <Icon name="carbon:add" class="w-5 h-5 inline-block ml-2" />
            </button>
            <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" class="py-3 px-6">User ID</th>
                        <th scope="col" class="py-3 px-6">Username</th>
                        <th scope="col" class="py-3 px-6">Email</th>
                        <th scope="col" class="py-3 px-6">Password (MD5)</th>
                        <th scope="col" class="py-3 px-6">Role</th>
                        <th scope="col" class="py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.user_id"
                        class="bg-gray-700 border-b border-gray-600 hover:bg-gray-600">
                        <td class="py-4 px-6">{{ user.user_id }}</td>
                        <td class="py-4 px-6">{{ user.username }}</td>
                        <td class="py-4 px-6">{{ user.email }}</td>
                        <td class="py-4 px-6">{{ user.password.substring(0, 10) }}...</td>
                        <td class="py-4 px-6">
                            <span v-if="user.role === 'admin'" class="bg-green-500 text-white px-2 py-1 rounded text-xs">
                                <Icon name="carbon:user-admin" class="w-4 h-4 inline-block" />
                                {{ user.role }}
                            </span>

                            <span v-else-if="user.role === 'policía'"
                                class="bg-blue-700 text-white px-2 py-1 rounded text-xs">
                                <Icon name="carbon:police" class="w-4 h-4 inline-block" />
                                {{ user.role }}
                            </span>

                            <span v-else class="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                                <Icon name="carbon:user" class="w-4 h-4 inline-block" />
                                {{ user.role }}
                            </span>
                        </td>
                        <td class="py-4 px-6">
                            <div class="flex items-center space-x-4">
                                <button @click="selectedUser = user" class="relative group" data-modal-target="edit-user"
                                    data-modal-toggle="edit-user">
                                    <Icon name="carbon:edit" class="w-6 h-6 text-gray-200 group-hover:text-gray-400" />
                                </button>
                                <button @click="selectedUser = user" class="relative group"
                                    data-modal-target="change-password" data-modal-toggle="change-password">
                                    <Icon name="carbon:locked" class="w-6 h-6 text-gray-200 group-hover:text-gray-400" />
                                </button>
                                <button @click="selectedUser = user" class="relative group" data-modal-target="delete-user"
                                    data-modal-toggle="delete-user">
                                    <Icon name="carbon:delete" class="w-6 h-6 text-red-500 group-hover:text-red-400" />
                                </button>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="add-user" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative  rounded-lg shadow bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 class="text-lg font-semibold text-white">
                            <Icon name="carbon:add" class="w-5 h-5 inline-block mr-2" />
                            Añadir usuario
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                            data-modal-toggle="add-user">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form action="#" class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2" v-if="newUser">
                            <div class="col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-white">
                                    Nombre de usuario
                                </label>
                                <input type="text" name="name" id="name"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    placeholder="Nombre del nuevo usuario" required autofocus v-model="newUser.username">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-white">Email</label>
                                <input type="email" name="email" id="email"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    placeholder="Email del nuevo usuario" required v-model="newUser.email">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="password" class="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                <input type="password" name="password" id="password"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    placeholder="Contraseña del nuevo usuario" required v-model="newUser.password">

                            </div>
                            <div class="col-span-2">
                                <label for="role" class="block mb-2 text-sm font-medium text-white">Rol</label>
                                <select id="role"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    v-model="newUser.role" required>
                                    <option selected disabled>Selecciona un rol</option>
                                    <option value="admin" disabled>
                                        <Icon name="carbon:user-admin" class="w-4 h-4 inline-block" />
                                        Admin
                                    </option>
                                    <option value="standard">
                                        <Icon name="carbon:user" class="w-4 h-4 inline-block" />
                                        Standard
                                    </option>
                                    <option value="policía">
                                        <Icon name="carbon:user" class="w-4 h-4 inline-block" />
                                        Policía
                                    </option>

                                </select>
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800"
                            @click="addUser" data-modal-toggle="add-user">
                            <Icon name="carbon:add" class="w-5 h-5 inline-block mr-2" />
                            Añadir usuario
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div id="delete-user" tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative rounded-lg shadow bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:text-white"
                        data-modal-hide="delete-user">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Cerrar modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 w-12 h-12 text-gray-200" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-400" v-if="selectedUser">
                            ¿Estás seguro de que quieres eliminar a
                            <Icon name="carbon:user" class="w-5 h-5 inline-block mr-2" /> {{ selectedUser.username }}?
                        </h3>
                        <button data-modal-hide="delete-user" type="button" @click="removeUser(selectedUser?.user_id)"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                            <Icon name="carbon:trash-can" class="w-5 h-5 inline-block mr-2" />
                            Eliminar
                        </button>
                        <button data-modal-hide="delete-user" type="button"
                            class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">
                            <Icon name="carbon:close" class="w-5 h-5 inline-block mr-2" />
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit-user" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative  rounded-lg shadow bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 class="text-lg font-semibold text-white">
                            <Icon name="carbon:edit" class="w-5 h-5 inline-block mr-2" />
                            Editar usuario
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                            data-modal-toggle="edit-user">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form action="#" class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2" v-if="selectedUser">
                            <div class="col-span-2">
                                <label for="nuevo-nombre" class="block mb-2 text-sm font-medium text-white">
                                    Nombre de usuario
                                </label>
                                <input type="text" name="name" id="nuevo-nombre"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    placeholder="Nombre del nuevo usuario" required autofocus
                                    v-model="selectedUser.username">
                            </div>
                            <div class="col-span-2">
                                <label for="nuevo-email" class="block mb-2 text-sm font-medium text-white">Email</label>
                                <input type="email" name="email" id="nuevo-email"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    placeholder="Email del nuevo usuario" required v-model="selectedUser.email">
                            </div>
                            <div class="col-span-2">
                                <label for="nuevo-role" class="block mb-2 text-sm font-medium text-white">Rol</label>
                                <select id="nuevo-role"
                                    class="bordertext-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"
                                    v-model="selectedUser.role" required>
                                    <option selected disabled>Selecciona un rol</option>
                                    <option value="admin" disabled>
                                        <Icon name="carbon:user-admin" class="w-4 h-4 inline-block" />
                                        Admin
                                    </option>
                                    <option value="standard">
                                        <Icon name="carbon:user" class="w-4 h-4 inline-block" />
                                        Standard
                                    </option>
                                    <option value="policía">
                                        <Icon name="carbon:user" class="w-4 h-4 inline-block" />
                                        Policía
                                    </option>

                                </select>
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800"
                            @click="editUser" data-modal-toggle="edit-user">
                            <Icon name="carbon:add" class="w-5 h-5 inline-block mr-2" />
                            Editar usuario
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div id="change-password" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative rounded-lg shadow bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 class="text-xl font-semibold text-white">
                            Cambiar contraseña
                        </h3>
                        <button type="button"
                            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="change-password">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form class="space-y-4">
                            <div>
                                <label for="old-pass" class="block mb-2 text-sm font-medium text-white">
                                    Contraseña anterior
                                </label>
                                <input type="password" name="old-pass" id="old-pass"
                                    class="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                                    placeholder="••••••••" required v-model="oldPassword">
                            </div>
                            <div>
                                <label for="new-password" class="block mb-2 text-sm font-medium text-white">
                                    Nueva contraseña
                                </label>
                                <input type="password" name="new-password" id="new-password" placeholder="••••••••"
                                    class="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                                    required v-model="newPassword">
                            </div>
                            <button type="button" data-modal-hide="change-password" @click="changePassword"
                                class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                                :class="{ 'disabled': md5(oldPassword) !== selectedUser?.password || newPassword === null }"
                                :disabled="md5(oldPassword).trim() !== selectedUser?.password.trim() && newPassword !== null">
                                <Icon name="carbon:locked" class="w-5 h-5 inline-block mr-2" />
                                Cambiar contraseña
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { initFlowbite, } from 'flowbite'
import md5 from 'md5'

type Alert = {
    type: 'success' | 'error'
    message: string
}

const alerts = ref<Alert[]>([])

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
// user_id is uuid
type User = {
    user_id: string
    username: string
    email: string
    password: string
    role: string
}

const { data: users, refresh } = useFetch<User[]>('http://main.brazilsouth.cloudapp.azure.com:8000/users')
const selectedUser = ref<null | User>(null);

function editUser() {
    if (!selectedUser.value) return;
    useFetch(`http://main.brazilsouth.cloudapp.azure.com:8000/users?user_id=eq.${selectedUser.value.user_id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            username: selectedUser.value.username,
            email: selectedUser.value.email,
            role: selectedUser.value.role
        }),
        onResponseError: (error) => {
            alerts.value.push({
                type: 'error',
                message: "No se ha podido editar el usuario."
            })
            console.log(error);
        },
        onResponse: () => {
            alerts.value.push({
                type: 'success',
                message: 'El usuario se ha editado correctamente.'
            })
            refresh();
        }
    })
    selectedUser.value = null;
}

const oldPassword = ref<string>('');
const newPassword = ref<string>('');
function changePassword() {
    if (!selectedUser.value) return;
    useFetch(`http://main.brazilsouth.cloudapp.azure.com:8000/users?user_id=eq.${selectedUser.value.user_id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            password: newPassword.value
        }),
        onResponseError: (error) => {
            alerts.value.push({
                type: 'error',
                message: "No se ha podido cambiar la contraseña."
            })
            console.log(error);
        },
        onResponse: () => {
            alerts.value.push({
                type: 'success',
                message: 'La contraseña se ha cambiado correctamente.'
            })
            refresh();
        }
    })
    selectedUser.value = null;
    oldPassword.value = newPassword.value = '';

}

function removeUser(userId: string | undefined) {
    if (!userId) return;

    useFetch(`http://main.brazilsouth.cloudapp.azure.com:8000/users?user_id=eq.${userId}`, {
        method: 'DELETE',
        onResponseError: (error) => {
            alerts.value.push({
                type: 'error',
                message: "No se ha podido eliminar el usuario."
            })
            console.log(error);
        },
        onResponse: () => {
            alerts.value.push({
                type: 'success',
                message: 'El usuario se ha eliminado correctamente.'
            })
            refresh();
        }

    })
}
const newUser = ref<null | User>(null);
function addUser() {
    // Logic to add a new user
    if (!newUser.value) return;
    useFetch('http://main.brazilsouth.cloudapp.azure.com:8000/users', {
        method: 'POST',
        body: JSON.stringify({
            username: newUser.value.username,
            email: newUser.value.email,
            password: newUser.value.password,
            role: newUser.value.role
        }),
        onResponseError: (error) => {
            alerts.value.push({
                type: 'error',
                message: "No se ha podido añadir el usuario."
            })
            console.log(error);
        },
        onResponse: () => {
            alerts.value.push({
                type: 'success',
                message: 'El usuario se ha añadido correctamente.'
            })
            refresh();
        }
    })
    newUser.value = null;
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
