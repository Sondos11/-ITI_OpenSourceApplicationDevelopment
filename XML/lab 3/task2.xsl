<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <head>
			<title>Employees</title>
		</head>
		 <style type="text/css">
                    table {
                    font-family: Arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    }

                    th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                    }

                    th {
                    background-color: #dddddd;
                    }
                </style>
  <body>
   <h1>Employee List</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                    <xsl:for-each select="employees/employee">
                        <tr>
                            <td>
                                <xsl:value-of select="name" />
                            </td>
                            <td>
                                <xsl:for-each select="phones/phone">
                                    <xsl:value-of select="." />
                  <xsl:if test="position() != last()">
                                        <br />
                                    </xsl:if>
                                </xsl:for-each>
                            </td>
                            <td>
                                <xsl:for-each select="phones/phone">
                                    <xsl:value-of select="@type" />
                  <xsl:if
                                        test="position() != last()">
                                        <br />
                                    </xsl:if>
                                </xsl:for-each>
                            </td>
                            <td>
                                <xsl:for-each select="addresses/address">
                                    <xsl:value-of
                                        select="concat(street, ', ', building_number, ', ', region, ', ', city, ', ', country)" />
                  <xsl:if
                                        test="position() != last()">
                                        <br />
                                    </xsl:if>
                                </xsl:for-each>
                            </td>
                            <td>
                                <xsl:value-of select="email" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>