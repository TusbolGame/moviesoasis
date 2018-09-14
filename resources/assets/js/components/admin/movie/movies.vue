<template>
    <div style="margin: 20px 10%" class="card">
        <div class="row">
            <div class="col-12">
                <div class="box box-primary">
                    <div class="box-header">
                        <div class="box-option">
                            <a @click="openDialog('add')"><span class="glyphicon glyphicon-plus primary pointer">Add</span></a>
                        </div>
                        <h3 class="box-title">All Movies</h3>

                        <div class="box-tools mt3" style="margin-top: 40px;">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control pull-right"
                                       placeholder="Search">

                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover table-striped">
                            <thead>
                            <tr class="text-center">
                                <th colspan="3" class="text-center">&nbsp;</th>
                                <th class="text-center">s/n</th>
                                <th style="width: 70px" class="text-center">Name</th>
                                <th class="text-center">Category</th>
                                <th class="text-center">Released Date</th>
                                <th class="text-center">Duration</th>
                                <th class="text-center">Views</th>
                                <!--<th class="text-center">YouLink</th>-->
                                <!--<th class="text-center">Subtitle</th>-->
                            </tr>
                            </thead>
                            <tbody>
                            <tr style="height:10px; overflow: hidden;" v-for="(movie, index) in movies">
                                <td style="width: 30px;"><input type="checkbox"></td>
                                <td style="width: 20px;">
                                    <a @click="openDialog('edit')">
                                        <span class="glyphicon glyphicon-edit"></span>
                                    </a>
                                </td>
                                <td style="width: 20px;">
                                    <a v-bind:id="'deletee' + (index + 1)"
                                       v-bind:href="adminUrl + 'delete_movie/' + movie.enc_id">
                                        <span class="glyphicon glyphicon-trash" style="color: red"></span>
                                    </a>
                                </td>
                                <td class="text-center">{{ (index + 1) }}</td>
                                <td class="text-center">
                                    <div class="truncate" style="width:200px">{{ movie.name }}</div>
                                </td>
                                <td class="text-center">{{ movie.category }}</td>
                                <td class="text-center">{{ movie.released_date }}</td>
                                <td class="text-center">{{ movie.duration }}</td>
                                <td class="text-center">{{ movie.views }}</td>
                            </tr>
                            </tbody>
                        </table><!-- /.table -->
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
    import {SweetModal} from 'sweet-modal-vue'

    export default {
        props: [],
        components: {
            SweetModal
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
            this.$movies.getMovies()
                .then((data) => {
                    console.log(data.data.data);
                    this.movies = data.data.data;
                })
        },
        data() {
            return {
                movies: {},
                adminUrl: '',
            }
        },
        computed: {}
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
</style>
<style>
    .sweet-title > h2  {
        margin-top: 20px !important;
        font-weight: bold;
    }
</style>

