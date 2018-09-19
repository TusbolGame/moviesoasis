<template>
    <div style="margin: 20px 10%" class="card">
        <div class="row">
            <div class="col-12">
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title text-success">All Movies</h3>
                        <div class="box-tools pull-right">
                            <div class="box-option">
                                <a @click="openDialog('add')"><span
                                        class="glyphicon glyphicon-plus primary pointer">Add</span></a>
                            </div>
                        </div><!-- /.box-tools -->
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive hidden-overflow">

                        <v-client-table :data="tableData" :columns="columns" :options="options"
                                        v-if="tableData.length > 0">
                            <a slot="id" slot-scope="props">{{ props.index }}</a>
                            <div slot="options" slot-scope="props">
                                <i class="glyphicon glyphicon-edit text-primary options"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="glyphicon glyphicon-trash text-danger options"></i>
                            </div>
                        </v-client-table>

                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->

            </div>
        </div>

        <sweet-modal ref="modal" :blocking="true" title="Add Movie" modal-theme="light" overlay-theme="dark">
            <add-movie @closeDialog="closeDialog"></add-movie>
        </sweet-modal>
    </div>
</template>

<script>
    import {SweetModal} from 'sweet-modal-vue';
    import {mapGetters} from 'vuex';
    import * as types from '../../../store/types';

    import add from './form/add';

    export default {
        props: [],
        components: {
            SweetModal,
            'AddMovie': add,
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
            this.$store.dispatch(types.FETCH_MOVIE);
        },
        data() {
            return {
                movies: {},
                adminUrl: '',
                columns: ['id', 'name', 'category', 'released_date', 'duration', 'views', 'options'],
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
                    sortable: ['id', 'name', 'category', 'released_date', 'duration', 'views']
                },
            }
        },
        computed: mapGetters({
            // getMovies: types.GET_MOVIES,
            tableData: types.GET_MOVIES,
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

