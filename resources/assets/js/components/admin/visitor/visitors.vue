<template>
    <div style="margin: 20px 10%" class="card">
        <div class="row">
            <div class="col-12">
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title text-success">All Visitors</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive hidden-overflow">

                        <v-client-table :data="tableData" :columns="columns" :options="options"
                                        v-if="tableData.length > 0">
                            <strong slot="id" slot-scope="props">{{ props.index }}</strong>
                        </v-client-table>

                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->

            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../../../store/types';

    export default {
        props: [],
        components: {
        },
        methods: {
            flag(category) {
                if (category == "christian" || category == "islamic") {
                    return true;
                }
                return false;
            },
            openDialog(action) {
                this.$refs.modal.open()
            },
            closeDialog() {
                this.$refs.modal.close()
            }
        },
        created() {
            this.$store.dispatch(types.FETCH_VISITORS);
        },
        data() {
            return {
                columns: ['id', 'ip', 'remotehost', 'location', 'referrer', 'pageview', 'useragent', 'date', 'time'],
                options: {
                    // see the options API
                    // skin: "table-hover table-striped table-bordered",
                    perPage: 10,
                    // footerHeadings: true,
                    highlightMatches: true,
                    pagination: {
                        chunk: 7,
                        //set dropdown to true to get dropdown instead of pagenation
                        dropdown: false
                    },
                    sortable: []
                },
            }
        },
        computed: mapGetters({
            tableData: types.GET_VISITORS,
        })
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 10%;
        background-color: transparent;
    }

    img {
        height: 200px;
        width: 200px;
    }

    .box-option {
        height: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .pointer {
        cursor: pointer;
    }

    td input {
        margin-left: 15px;
    }

    td a {
        cursor: pointer;
    }

    .options {
        cursor: pointer;
    }

    .hidden-overflow {
        overflow: hidden
    }
</style>
<style>
    .sweet-title > h2 {
        margin-top: 20px !important;
        font-weight: bold;
    }
</style>

