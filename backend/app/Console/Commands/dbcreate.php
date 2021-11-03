<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class dbcreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new MariaDB database based on the database name in .env file';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $database = env('DB_DATABASE', false);

            if (!$database || $database == 'laravel') {
                $this->info("Skipping creation of database as env('DB_DATABASE') is empty or database name should be diferent of laravel");
                return;
            }

            $charset = config("database.connections.mysql.charset", 'utf8mb4');
            $collation = config("database.connections.mysql.collation", 'uft8mb4_unicode_ci');

            config(["database.connections.mysql.database" => null]);

            $query = "CREATE DATABASE IF NOT EXISTS $database CHARACTER SET $charset COLLATE $collation;";

            DB::statement($query);

            config(["database.connections.mysql.database" => $database]);
            $this->info("Database $database created succesfully");
        } catch (\Exception $e) {
            $this->error("Failed to create $database database. " . $e->getMessage());
        }
    }
}
