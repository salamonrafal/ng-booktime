
component  {
    this.dsn = 'THE_NETWORK';
    this.pageencoding = "UTF-8";

    remote function getPersons()  {
      getpagecontext().getcfoutput().clearall();

      local.query = new Query();
      local.query.setDataSource(this.dsn);
      local.sql = "SELECT [person_id], [person_name], [person_surname], [person_note] FROM [STEPSTONE-ASA\salamr01].[_person_kickoff_2016]";
      local.query.setSQL(local.sql);
      local.results = local.query.execute().getResult();
      local.arrayResults = [];

      for (local.i = 1; local.i <= local.results.recordcount; local.i++) {
        local.temp = {
          'id' = local.results['person_id'][local.i],
          'name' = local.results['person_name'][local.i],
          'surname' = local.results['person_surname'][local.i],
          'note' = local.results['person_note'][local.i]
        };
        arrayAppend(local.arrayResults, local.temp);
      }

      writeOutput(serializeJSON(local.arrayResults));
      abort;
    }

    remote function addPerson (
      required string id,
      required string name,
      required string surname,
      string note = ''
    ) {
      getpagecontext().getcfoutput().clearall();
      local.isExists = isPersonExists(arguments.id);

      if (!local.isExists){
        local.query = new Query();
        local.query.setDataSource(this.dsn);
        local.sql ="INSERT INTO [STEPSTONE-ASA\salamr01].[_person_kickoff_2016]"
        & "([person_id]"
        & ",[person_name]"
        & ",[person_surname]"
        & ",[person_note])"
        & "VALUES"
        & "(:id"
        & ",:name"
        & ",:surname"
        & ",:note)";

        local.query.addParam (name ="id", value = htmlEditFormat(arguments.id), cfsqltype ="cf_sql_nvarchar");
        local.query.addParam (name ="name", value = htmlEditFormat(arguments.name), cfsqltype ="cf_sql_nvarchar");
        local.query.addParam (name ="surname", value = htmlEditFormat(arguments.surname), cfsqltype ="cf_sql_nvarchar");
        local.query.addParam (name ="note", value = htmlEditFormat(arguments.note), cfsqltype ="cf_sql_nvarchar");

        local.query.setSQL(local.sql);
        local.query.execute();
      }

      local.response = {
        'done' = true,
        'exists' = local.isExists,
        'arguments' = arguments
      };

      writeOutput(serializeJSON(local.response));
      abort;
    }

  remote function deletPerson(required string id) {
    getpagecontext().getcfoutput().clearall();

    local.query = new Query();
    local.query.setDataSource(this.dsn);
    local.sql = "DELETE FROM [STEPSTONE-ASA\salamr01].[_person_kickoff_2016] WHERE [person_id] = :id";
    local.query.addParam (name = "id", value = htmlEditFormat(arguments.id), cfsqltype = "cf_sql_nvarchar");
    local.query.setSQL(local.sql);
    local.query.execute();

    local.response = {
      'done' = true,
      'arguments' = arguments
    };

    writeOutput(serializeJSON(local.response));
    abort;
  }

  private boolean function isPersonExists(required string id) {
    local.query = new Query();
    local.query.setDataSource(this.dsn);
    local.sql = "SELECT COUNT(*) AS [LEN] FROM [STEPSTONE-ASA\salamr01].[_person_kickoff_2016] WHERE [person_id] = :id";
    local.query.addParam (name = "id", value = htmlEditFormat(arguments.id), cfsqltype = "cf_sql_nvarchar");
    local.query.setSQL(local.sql);
    local.results = local.query.execute().getResult();

    return (local.results['LEN'][1] > 0 ? true : false);
  }
}
