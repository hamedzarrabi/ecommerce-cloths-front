<template>
  <div class="" >
    <v-table
      fixed-header
      fixed-footer
      :items-per-page="itemsPerPage"
      :pagination.sync="pagination"
    >
      <thead class="bg-greenHamed">
      <tr class="p-2 justify-center items-center">
        <th class="text-white justify-center items-center py-4 px-2">
          Name
        </th>
        <th class="text-white justify-center items-center py-4 px-2">
          Email
        </th>
        <th class="text-white justify-center items-center py-4 px-2">
          Message
        </th>
        <th class="text-white justify-center items-center py-4 px-2">
          Date
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-gray-300 border-b"
          v-for="(contact, index) in paginatedContacts"
          :key="index"
      >
        <td class="border-b items-center justify-center py-4 px-2">{{ contact.name }}</td>
        <td class="border-b items-center justify-center py-4 px-2">{{ contact.email }}</td>
        <td class="border-b items-center justify-center py-4 px-2">{{ contact.message }}</td>
        <td class="border-b items-center justify-center py-4 px-2">{{ formattedUpdateDate(contact.createAt) }}</td>
      </tr>
      </tbody>
    </v-table>

  </div>

</template>
<script>
import { UserService as ContactService } from '@/service/ContactService';
import moment from 'moment';
export default {

  data () {
    return {
      itemsPerPage: 10,
      pagination: {
        sortBy: 'createAt',
        descending: true,
        page: 1
      },
      contacts: [],
      headers: [
          "name", "email", "message"
      ],
          }
  },

  methods: {
    formattedUpdateDate(dateString) {
      const date = moment(dateString);
      return date.format("YYYY/MM/DD hh:mm:ss");
    }
  },
  computed: {
    paginatedContacts() {
      const start = (this.pagination.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.contacts.slice(start, end);
    }
  },

  created() {
    const contact = ContactService.findAllContact().then(
        res => this.contacts = res.data
    );
    // console.log(contact);

  }
}
</script>


<style scoped>

</style>